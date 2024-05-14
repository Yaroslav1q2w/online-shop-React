import { Box } from "@mui/material";
import BeatLoader from "react-spinners/BeatLoader";

const Loader = () => {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
				marginTop: "-160px",
			}}
		>
			<BeatLoader color="#36d7b7" size={20} />
		</Box>
	);
};

export default Loader;
