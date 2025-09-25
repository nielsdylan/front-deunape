import { useEffect, useState } from "react";
import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import Badge from "../../components/ui/badge/Badge";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../components/ui/table";
import { getCustomers } from "../../services/configurations/CustomerService";


// interface Order {
//   id: number;
//   user: {
//     image: string;
//     name: string;
//     role: string;
//   };
//   projectName: string;
//   team: {
//     images: string[];
//   };
//   status: string;
//   budget: string;
// }
interface Customer {
  id: number;
  name:string;
  last_names: string;
  document_number:string;
  cell_numer:number;
  active:number;
}


function Customers() {
    const [customer, setCustomer] = useState<Customer[]>([]);
    // const [customers, setCustomers] = useState<Customer[]>([]);
// Define the table data using the interface
    // const tableData: Order[] = [
    //   {
    //     id: 1,
    //     user: {
    //       image: "/images/user/user-17.jpg",
    //       name: "Lindsey Curtis",
    //       role: "Web Designer",
    //     },
    //     projectName: "Agency Website",
    //     team: {
    //       images: [
    //         "/images/user/user-22.jpg",
    //         "/images/user/user-23.jpg",
    //         "/images/user/user-24.jpg",
    //       ],
    //     },
    //     budget: "3.9K",
    //     status: "Active",
    //   },
    //   {
    //     id: 2,
    //     user: {
    //       image: "/images/user/user-18.jpg",
    //       name: "Kaiya George",
    //       role: "Project Manager",
    //     },
    //     projectName: "Technology",
    //     team: {
    //       images: ["/images/user/user-25.jpg", "/images/user/user-26.jpg"],
    //     },
    //     budget: "24.9K",
    //     status: "Pending",
    //   },
    //   {
    //     id: 3,
    //     user: {
    //       image: "/images/user/user-17.jpg",
    //       name: "Zain Geidt",
    //       role: "Content Writing",
    //     },
    //     projectName: "Blog Writing",
    //     team: {
    //       images: ["/images/user/user-27.jpg"],
    //     },
    //     budget: "12.7K",
    //     status: "Active",
    //   },
    //   {
    //     id: 4,
    //     user: {
    //       image: "/images/user/user-20.jpg",
    //       name: "Abram Schleifer",
    //       role: "Digital Marketer",
    //     },
    //     projectName: "Social Media",
    //     team: {
    //       images: [
    //         "/images/user/user-28.jpg",
    //         "/images/user/user-29.jpg",
    //         "/images/user/user-30.jpg",
    //       ],
    //     },
    //     budget: "2.8K",
    //     status: "Cancel",
    //   },
    //   {
    //     id: 5,
    //     user: {
    //       image: "/images/user/user-21.jpg",
    //       name: "Carla George",
    //       role: "Front-end Developer",
    //     },
    //     projectName: "Website",
    //     team: {
    //       images: [
    //         "/images/user/user-31.jpg",
    //         "/images/user/user-32.jpg",
    //         "/images/user/user-33.jpg",
    //       ],
    //     },
    //     budget: "4.5K",
    //     status: "Active",
    //   },
    // ];

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const respons = await getCustomers();
                setCustomer(respons.data);
                
            } catch (error) {
                console.log(error);                
            }finally {
                // setIsLoading(false);
                // console.log('finalizo');
            }
            
        };

        fetchCustomers();
        
    }, []);
    return ( 
        <>
            <PageMeta
                title="React.js Basic Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
                description="This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
            />
            <PageBreadcrumb pageTitle="Gestion de Clientes" />
            <div className="space-y-6">
                <ComponentCard title="Clientes ">
                    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
                        <div className="max-w-full overflow-x-auto">
                            <Table>
                            {/* Table Header */}
                            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                                <TableRow>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    User
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    N° Documento
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Celular
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Estado
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Accion
                                </TableCell>
                                </TableRow>
                            </TableHeader>

                            {/* Table Body */}
                            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                            { customer.length>0 ? (
                                customer.map((order) => (
                                <TableRow key={order.id}>
                                    <TableCell className="px-5 py-4 sm:px-6 text-start">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 overflow-hidden rounded-full">
                                        <img
                                            width={40}
                                            height={40}
                                            src={'/images/user/user-21.jpg'}
                                            alt={'Carla George'}
                                        />
                                        </div>
                                        <div>
                                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                            {order.name}
                                        </span>
                                        <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                                            {order.last_names}
                                        </span>
                                        </div>
                                    </div>
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                    {order.document_number}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                    <div className="flex -space-x-2">
                                        {order.cell_numer}
                                    </div>
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                    <Badge
                                        size="sm"
                                        color={
                                        order.active === 1
                                            ? "success"
                                            : order.active === 2
                                            ? "warning"
                                            : "error"
                                        }
                                    >
                                        {order.active}
                                    </Badge>
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                        <button className="inline-flex items-center justify-center gap-2 rounded-lg transition px-4 py-3 text-sm bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300">Editar</button>
                                        
                                    </TableCell>
                                </TableRow>
                                ))
                            ) : (<TableRow>
                                    <TableCell className="py-4 text-center text-gray-500 dark:text-gray-400" colSpan={5} >
                                        No customer data available.
                                    </TableCell>
                                </TableRow>
                            ) }
                                {/* {} */}
                            </TableBody>
                            </Table>
                        </div>
                    </div>
                    
                </ComponentCard>
            </div>
        </>
     );
}

export default Customers;