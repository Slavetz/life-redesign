import IndexPageTemplate from '../templates/IndexPage'
import getPostsData from "../data/posts";

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
