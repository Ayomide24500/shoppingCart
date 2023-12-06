import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { mainRoute } from "./route/mainRouter";
import { Provider } from "react-redux";
import { store } from "./global/store";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <div>
          <RouterProvider router={mainRoute} />
        </div>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
