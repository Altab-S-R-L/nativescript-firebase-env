const fs = require("fs-extra");
const path = require("path");

module.exports = function (
  $logger,
  $platformsDataService,
  $projectData,
  hookArgs
) {
  const platform = hookArgs.prepareData.platform;
  const appDir = $projectData.projectDir;
  const extension = hookArgs.prepareData.env.production ? ".prod" : ".dev";

  if (platform === "android") {
    const file = `google-services.json${extension}`;
    const filePath = path.join(appDir, file);

    if (fs.existsSync(filePath)) {
      fs.copyFileSync(
        filePath,
        path.join(
          appDir,
          "app",
          "App_Resources",
          "Android",
          "google-services.json"
        )
      );
    }
  } else if (platform === "ios") {
    const file = `GoogleService-Info.plist${extension}`;
    const filePath = path.join(appDir, file);

    if (fs.existsSync(filePath)) {
      fs.copyFileSync(
        filePath,
        path.join(
          appDir,
          "app",
          "App_Resources",
          "iOS",
          "GoogleService-Info.plist"
        )
      );
    }
  }
};
