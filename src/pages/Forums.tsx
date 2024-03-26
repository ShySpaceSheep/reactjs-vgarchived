import NavigationBar from "../components/NavigationBar/NavigationBar";
import maintenance_rare from "../assets/maintenance-rare.png";

export default function Forums() {
  return (
    <>
      <NavigationBar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={maintenance_rare} />
      </div>
    </>
  );
}
