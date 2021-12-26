const fs = require("fs");
const path = require("path");

const postDerictory = path.join(process.cwd(), "data");

function readJsonFiles() {
  const tr1 = fs.readFileSync(path.join(postDerictory, "tr1.json"), "utf8");
  const tr2 = fs.readFileSync(path.join(postDerictory, "tr2.json"), "utf8");
  const tr3 = fs.readFileSync(path.join(postDerictory, "tr3.json"), "utf8");
  const tr4 = fs.readFileSync(path.join(postDerictory, "tr4.json"), "utf8");
  const trailOne = JSON.parse(tr1);
  const trailTwo = JSON.parse(tr2);
  const trailThree = JSON.parse(tr3);
  const trailFour = JSON.parse(tr4);

  const command = {
    cmd: trailOne["cmd_vel"]
      .concat(trailTwo["cmd_vel"])
      .concat(trailThree["cmd_vel"])
      .concat(trailFour["cmd_vel"]),
  };

  const current = {
    current: trailOne["current"]
      .concat(trailTwo["current"])
      .concat(trailThree["current"])
      .concat(trailFour["current"]),
  };

  const actualVel = {
    actual_vel: trailOne["actual_vel"]
      .concat(trailTwo["actual_vel"])
      .concat(trailThree["actual_vel"])
      .concat(trailFour["actual_vel"]),
  };

  const imu = {
    IMU: trailOne["IMU"].concat(trailTwo["IMU"]).concat(trailThree["IMU"]),
  };

  fs.writeFileSync(
    path.join(postDerictory, "cmd.json"),
    JSON.stringify(command)
  );
  fs.writeFileSync(
    path.join(postDerictory, "current.json"),
    JSON.stringify(current)
  );
  fs.writeFileSync(
    path.join(postDerictory, "actual-vel.json"),
    JSON.stringify(actualVel)
  );
  fs.writeFileSync(path.join(postDerictory, "imu.json"), JSON.stringify(imu));
}
