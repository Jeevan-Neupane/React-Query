import { useQuery } from "react-query";
import axios from "axios";

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4001/users/${email}`);
};

const fetchCoursesByChannelId = (channelId) => {
  return axios.get(`http://localhost:4001/channels/${channelId}`);
};

function DependentQuiries({ email }) {
  const { data: user } = useQuery(["user", email], () =>
    fetchUserByEmail(email)
  );
  const channelId = user?.data.channelId;

  const { data: courses } = useQuery(
    ["courses", channelId],
    () => fetchCoursesByChannelId(channelId),
    {
      enabled: !!channelId,
    }
  );

  const renderedCourses = courses?.data.courses.map((course) => {
    return <h3 className="text-3xl bg-green-500 text-white font-bold mt-4 p-3">{course}</h3>;
  });

  return (
    <div>
      <h2 className="text-center text-4xl font-semibold">Courses Avilable in {channelId}</h2>
      {renderedCourses}
    </div>
  );
}

export default DependentQuiries;
