npx create-nx-workspace@latest anacondong-monorepo --preset=react-monorepo

npx nx show project anacondong-monorepo

-- run
npx nx serve anacondong-monorepo

-- Build
npx nx run-many -t build

-- Graph
npx nx graph
npx nx graph --affected


-- Deploy 
nx run anacondong-monorepo:deploy -- need update deploy command on project.json


--- add app
npx nx list @nx/react
npx nx g @nx/react:app inventory --directory=apps/inventory

---- Creating Local Libraries
npx nx g @nx/react:library products --directory=libs/products --unitTestRunner=vitest --bundler=none
npx nx g @nx/react:library orders --directory=libs/orders --unitTestRunner=vitest --bundler=none
npx nx g @nx/react:library shared-ui --directory=libs/shared/ui --unitTestRunner=vitest --bundler=none


--- testing
npx nx test anacondong-monorepo # runs the tests for anacondong-monorepo
npx nx lint inventory # runs the linter on inventory
npx nx e2e anacondong-monorepo-e2e # runs e2e tests for the anacondong-monorepo
npx nx run-many -t test


