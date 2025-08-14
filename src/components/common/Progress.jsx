// Import Matrial Ui Components
import CircularProgress from "@mui/material/CircularProgress";

function Progress({ height }) {
  return (
    <div
      className="circular-progress"
      style={{
        width: "100%",
        height: `${height}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress sx={{ color: "#6f42c1" }} />
    </div>
  );
}

export default Progress;
