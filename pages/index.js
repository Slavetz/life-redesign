import IndexPageTemplate from '../src/template/IndexPage'
import getPostsData from "../src/data/posts";

export default function IndexPage(props) {
  const {data} = props;
  return (
      <IndexPageTemplate data={data}  />
  )
}

export async function getServerSideProps() {
  const data = await getPostsData();
  return {
    props: {
      data: data
    },
  };
}
