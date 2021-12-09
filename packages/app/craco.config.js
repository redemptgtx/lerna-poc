// This solution allows to import typescript into javascript
// https://stackoverflow.com/questions/59867657/create-react-app-typescript-in-monorepo-code-sharing/66426351#66426351
const path = require('path');
/**
 * ALlows us to edit create-react-app configuration
 * without ejecting.
 *
 *
 */
const { getLoader, loaderByName } = require('@craco/craco');
// Replace `components` with your folder's structure.
// Again, Here I'm showcasing my current project.
const absolutePath = path.join(__dirname, '../components');
/**
 * This is extremely important if you're using a CI/CD to build and deploy 
 * your code!!! Read!
 * 
 * If you create a package with a namespace, such as name is @schon/components, you need
 * to add what I've commented down below. Otherwise Yarn will fail in CI/CD environments!!
 */
// const schonComponents = path.join(
//   __dirname,
//   './node_modules/@schon/components',
// );

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // https://medium.com/frontend-digest/using-create-react-app-in-a-monorepo-a4e6f25be7aa
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName('babel-loader'),
      );
      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];
        // match.loader.include = include.concat(absolutePath, schonComponents);
        match.loader.include = include.concat(absolutePath);
      }
      return {
        ...webpackConfig,
        /**
         * Optionally, other webpack configuration details.
         */
        // optimization: {
        //   splitChunks: {
        //   },
        // },
      };
    },
  },
  
};