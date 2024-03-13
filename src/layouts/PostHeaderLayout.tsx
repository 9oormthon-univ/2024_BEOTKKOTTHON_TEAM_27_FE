import { Outlet } from "react-router-dom";
import PostHeader from "../components/common/PostHeader";

const HomeMypageHeaderLayout = () => {
	return (
		<>
			<PostHeader />
			<Outlet />
		</>
	);
};

export default HomeMypageHeaderLayout;
