import React from "react";

const account = () => {
  return <div>account</div>;
};

export default account;
// import { doc, updateDoc } from "firebase/firestore";
// import { useRouter } from "next/router";
// import React, { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";

// // import { Onboarding } from "@/base/Onboarding";
// import { db } from "@/config/firebase";
// import { Meta } from "@/layouts/Meta";
// // import { useAuth } from "@/lib/auth";

// export default function SignIn() {
//   const newLocal2 =
//     "focus:shadow-outline mt-3 flex w-full items-center justify-center rounded-lg bg-indigo-500 py-4 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out hover:bg-indigo-900 focus:outline-none";

//   const [data, setData] = useState({
//     fname: "",
//     lname: "",
//     country: "",
//     phone: "",
//   });

//   const { user } = useAuth();
//   const router = useRouter();

//   const savetoDb = async (e: any) => {
//     e.preventDefault();
//     const id = toast.loading("Please wait...");
//     try {
//       const ref = doc(db, "users", user.uid);
//       await updateDoc(ref, {
//         firstName: data.fname,
//         lastName: data.lname,
//         country: data.country,
//         phone: data.phone,
//         rate: "Not Specified",
//         liked: [5],
//       });
//       router.push("/redirecting/accountCreationSuccessful");
//     } catch (err) {
//       toast.update(id, {
//         render: "An Error Occurred",
//         type: "error",
//         isLoading: false,
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
//     }
//   };

// return (
//   <Onboarding
//     metaOnboard={
//       <Meta title="About You" description="Tell Us about Yourself" />
//     }
//   >
//     <div className="">
//       <a href="#">
//         <img src="/favicon.ico" alt="icon" className="mx-auto h-12" />
//       </a>
//       <div className="mt-12 flex flex-col items-center">
//         <h1 className="text-2xl font-extrabold xl:text-3xl">
//           Account Details
//         </h1>
//         <div className="mt-8 w-full flex-1">
//           <form action="#" onSubmit={savetoDb}>
//             <div className="overflow-hidden">
//               <div className=" px-4 py-5 sm:p-6">
//                 <div className="grid grid-cols-6 gap-6">
//                   <div className="col-span-6 sm:col-span-3">
//                     <label
//                       htmlFor="helper-first"
//                       className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
//                     >
//                       First name
//                     </label>
//                     <input
//                       type="text"
//                       id="helper-first"
//                       aria-describedby="helper-text-explanation"
//                       className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
//                       placeholder="John"
//                       value={data.fname}
//                       onChange={(e: any) => {
//                         setData({ ...data, fname: e.target.value });
//                       }}
//                     />
//                   </div>

//                   <div className="col-span-6 sm:col-span-3">
//                     <label
//                       htmlFor="helper-last"
//                       className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
//                     >
//                       Last name
//                     </label>
//                     <input
//                       type="text"
//                       id="helper-last"
//                       aria-describedby="helper-text-explanation"
//                       className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
//                       placeholder="Doe"
//                       value={data.lname}
//                       onChange={(e: any) => {
//                         setData({ ...data, lname: e.target.value });
//                       }}
//                     />
//                   </div>

//                   <div className="col-span-6 sm:col-span-3">
//                     <label
//                       htmlFor="helper-country"
//                       className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
//                     >
//                       Country
//                     </label>
//                     <input
//                       type="text"
//                       id="helper-country"
//                       aria-describedby="helper-text-explanation"
//                       className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
//                       placeholder="Your Country"
//                       value={data.country}
//                       onChange={(e: any) => {
//                         setData({ ...data, country: e.target.value });
//                       }}
//                     />
//                   </div>

//                   <div className="col-span-6 sm:col-span-3">
//                     <label
//                       htmlFor="helper-number"
//                       className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
//                     >
//                       Phone Number
//                     </label>
//                     <input
//                       type="phone"
//                       id="helper-number"
//                       aria-describedby="helper-text-explanation"
//                       className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
//                       placeholder="+1 (555) 555-5555"
//                       value={data.phone}
//                       onChange={(e: any) => {
//                         setData({ ...data, phone: e.target.value });
//                       }}
//                     />
//                   </div>
//                 </div>

//                 <div className="mt-10 flex items-center pt-7">
//                   <input
//                     id="link-checkbox"
//                     type="checkbox"
//                     value=""
//                     className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
//                   />
//                   <label
//                     htmlFor="link-checkbox"
//                     className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300"
//                   >
//                     By signing up, you are creating a TransCIIT account, and
//                     you agree to TransCIIT{" "}
//                     <a
//                       href="#"
//                       className="text-blue-600 hover:underline dark:text-blue-500"
//                     >
//                       Terms of Service
//                     </a>{" "}
//                     and its{" "}
//                     <a
//                       href="#"
//                       className="text-blue-600 hover:underline dark:text-blue-500"
//                     >
//                       Privacy Policy
//                     </a>
//                   </label>
//                 </div>
//               </div>
//               <div className="px-4 text-right sm:px-6">
//                 <button type="submit" className={newLocal2}>
//                   <span className="ml-3">Create Account</span>
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//     <ToastContainer />
//   </Onboarding>
// );
// }
