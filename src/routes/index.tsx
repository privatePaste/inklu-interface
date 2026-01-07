import { createBrowserRouter } from "react-router-dom";
import DashboardAdmin from "../admin/pages/Dashboard.Admin";
import PublicLayout from "../app/PublicLyout";
import CreateEstabelecimento from "../admin/src/components/create-estabelecimento/CRUD/Create";
import ReadEstabelecimento from "../admin/src/components/create-estabelecimento/CRUD/Read";
import UpdateEstabelecimento from "../admin/src/components/create-estabelecimento/CRUD/Update";
import DeleteEstabelecimento from "../admin/src/components/create-estabelecimento/CRUD/Delete";
import { AdminLayout } from "../admin/layouts/AdminLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                path: "dashboard",
                element: <DashboardAdmin />
            },
            {
                path: "estabelecimentos/create",
                element: <CreateEstabelecimento />
            },
            {
                path: "estabelecimentos/read",
                element: <ReadEstabelecimento />
            },
            {
                path: "estabelecimentos/update",
                element: <UpdateEstabelecimento />
            },
            {
                path: "estabelecimentos/delete",
                element: <DeleteEstabelecimento />
            },

            // futuras rotas admin aqui
        ]
    }
]);
