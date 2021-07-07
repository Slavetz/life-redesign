// для рекламы google
/* eslint max-classes-per-file: ["error", 2] */
window.googletag = window.googletag || {};
window.googletag.cmd = window.googletag.cmd || [];
window.googletag.cmd.push(() => {
  // Colapse div if empty
  window.googletag.pubads().collapseEmptyDivs(true);
  // Infinite scroll requires SRA
  window.googletag.pubads().enableSingleRequest();
  // Disable initial load, we will use refresh() to fetch ads.
  // Calling this function means that display() calls just
  // register the slot as ready, but do not fetch ads for it.
  window.googletag.pubads().disableInitialLoad();
  // Enable services
  window.googletag.enableServices();
});
// для рекламы prebid
window.pbjs = window.pbjs || {};
window.pbjs.que = window.pbjs.que || [];
window.priceGranularity = {
  buckets: [
    { min: 0, max: 900, increment: 1.0 },
    { min: 902, max: 3600, increment: 2.0 },
    { min: 3605, max: 5850, increment: 5.0 },
  ],
};

(() => {
  class AdSlot {
    constructor(props, counter) {
      this.props = props;
      this.id = `${this.props.selector}-${counter}`;
    }

    _init() {
      const { slot, slotSizes, targets, bid, bidSizes } = this.props;

      if (bid && !document.getElementById('prebid-script')){
        const doc = document;
        const sc = doc.createElement('script');
        sc.async = true;
        sc.id = 'prebid-script'
        sc.src = '/static/js/prebid.3.15.0.min.js';
        const s = doc.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(sc, s);
      }

      const { googletag } = window;

      // console.log(
      //   '### init Ad',
      //   !bid ? 'slot' : 'bid',
      //   this.id,
      //   new Date().getTime() - window.startTime,
      // );

      googletag.cmd.push(() => {
        // console.log('### googletag.cmd.push', this.id, new Date().getTime() - window.startTime)
        const { id } = this;
        const ad = googletag.defineSlot(slot, slotSizes, id).addService(googletag.pubads());

        this.ad = ad;

        googletag.display(id);

        if (targets && Array.isArray(targets) && targets.length > 0) {
          targets.forEach(({ name, value }) => {
            ad.setTargeting(name, value);
          });
        }

        if (!bid) {
          googletag.pubads().refresh([ad]);
          return;
        }

        const { pbjs, priceGranularity } = window;

        pbjs.que.push(() => {
          // console.log('### pbjs.que.push', id, new Date().getTime() - window.startTime)
          const adUnit = {
            code: id,
            mediaTypes: { banner: { sizes: bidSizes } },
            bids: [bid],
          };
          pbjs.addAdUnits(adUnit);
          pbjs.setConfig({
            priceGranularity,
          });
          pbjs.requestBids({
            adUnitCodes: [id],
            bidsBackHandler() {
              pbjs.setTargetingForGPTAsync([id]);
              googletag.pubads().refresh([ad]);
            },
          });
        });
      });
    }

    refreshAd() {
      const { googletag } = window;
      const { ad, id, props: { bid } } = this;
      // console.log('>>> Refresh Ad', bid ? 'bid' : 'slot', id)
      try {
        googletag.cmd.push(() => {
          googletag.display(id);
        });
        // console.log(
        //   '>>> Refresh Ad',
        //   bid ? 'bid' : 'slot',
        //   id,
        //   new Date().getTime() - window.startTime,
        // );
        if (bid) {
          this._refreshBid(ad, id);
        } else {
          this._refreshSlot(ad);
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('refreshAd Err', err);
      }
    }

    // eslint-disable-next-line class-methods-use-this
    _refreshSlot(ad) {
      const { googletag } = window;
      // if (!googletag.pubads) return;
      googletag.cmd.push(() => {
        googletag.pubads().refresh([ad]);
      });
    }

    // eslint-disable-next-line class-methods-use-this
    _refreshBid(ad, id) {
      const { googletag, pbjs } = window;
      // if (!pbjs.requestBids) return;
      pbjs.que.push(() => {
        pbjs.requestBids({
          adUnitCodes: [id],
          bidsBackHandler() {
            pbjs.setTargetingForGPTAsync([id]);
            googletag.pubads().refresh([ad]);
          },
        });
      });
    }
  }

  class AdManagerClass {
    constructor() {
      this.counter = 0;
      this.adSlots = [];
    }

    createSlot(props) {
      const adSlot = new AdSlot(props, this.counter);
      if (adSlot) this.adSlots.push(adSlot);
      this.counter += 1;
      return adSlot;
    }

    removeSlotById(id) {
      const lenght = this.adSlots.length;
      this.adSlots = this.adSlots.filter(slot => slot.id !== id)

      if (this.adSlots.length === lenght)
        console.error('id of removing ad is not founded');

    }

    getSlotById(id) {
      return this.adSlots.find((el) => el.id === id);
    }
  }

  window.adManager = new AdManagerClass();
})();
