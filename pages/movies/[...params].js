import { useRouter } from "next/router";

const Detail = ({ params }) => {
  const router = useRouter();
  const [title, id] = params || [];
  return (
    <div>
      <h4>{title}</h4>
    </div>
  );
};

export default Detail;

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
