import { CiBookmark } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";
import { FaBriefcase } from "react-icons/fa";
const SubLinks = [
    {
        page: 'products',
        links: [
            {
                label: 'payment',
                icon: <CiCreditCard1 />,
                url: '/products'
            },

            {
                label: 'terminal',
                icon: <CiCreditCard1 />,
                url: '/products'
            },

            {
                label: 'connect',
                icon: <CiCreditCard1 />,
                url: '/products'
            },

        ]
    },

    {
        page: 'developers',
        links: [
            {
                label: 'plugins',
                icon: <CiBookmark />,
                url: '/developers'
            },

            {
                label: 'libraries',
                icon: <CiBookmark />,
                url: '/developers'
            },

            {
                label: 'help',
                icon: <CiBookmark />,
                url: '/developers'
            },
        ]

    },

    {
        page: 'company',
        links: [
            {
                label: 'about',
                icon: <FaBriefcase />,
                url: '/company'
            },

            {
                label: 'customers',
                icon: <FaBriefcase />,
                url: '/company'
            },
        ]
    }


]

export default SubLinks