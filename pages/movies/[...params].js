import Seo from "../../components/Seo";

const Detail = ({ params }) => {
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
};

export const getServerSideProps = ({ params: { params } }) => {
  return {
    props: {
      params,
    },
  };
};

export default Detail;
