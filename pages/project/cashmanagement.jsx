import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import CashManagement from '../../public/assets/projects/cash-management.png'
import SkillItems from "../../components/Items/SkillItems";
import TailwindCSS from '../../public/assets/skills/tailwind.png'
import NextJS from '../../public/assets/skills/nextjs.png'
import NodeJS from '../../public/assets/skills/node.png'
import Typescript from '../../public/assets/skills/typescript.png'
import MySQL from '../../public/assets/skills/MySQL.png'
const cashmanagement = () => {
    return (
        <>
            <Head>
                <title>Hilal Akbar | Cash Management</title>
            </Head>
            <div className='w-full'>
                <div className="w-full relative h-[50vh]">
                    <div className="absolute left-0 top-0 w-full z-10 bg-black/60 h-[50vh]" />
                    <Image className='absolute z-1' src={CashManagement} layout='fill' objectFit='cover' alt="/" />
                    <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                        <h2 className='py-2'>Cash Management</h2>
                    </div>
                </div>

                <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                    <div className='col-span-3'>
                        <h2> Project Overview</h2>
                        <p className='my-2'>
                            CashManage is a website for managing finances, both income and expenses using this CashManage website so that what is expected is to have a positive impact on managing their finances. So that they are not confused with the expenses they make because it has been recorded on the CashManage website.
                        </p>

                        <div className='mt-8'>
                            <a
                                href='https://github.com/akbr-hilal/cashmanage'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <button className='px-8 py-2 mt-4 mr-8 buttonEnable'>Code</button>
                            </a>
                            <a
                                href='https://akbr-hilal.github.io/cashmanage/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <button className='px-8 py-2 mt-4 buttonEnable'>Demo</button>
                            </a>
                            <div className='mt-5'>
                                <Link href='/#projects'>
                                    <p className='underline cursor-pointer hover:text-[#071695]'>Back</p>
                                </Link>
                            </div>
                        </div>

                    </div>

                    <div className='col-span-4 md:col-span-2 shadow-md shadow-gray-400 rounded-xl py-2'>
                        <div className='p-2'>
                            <p className='text-center font-bold pb-2'>Technologies</p>
                            <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                                <SkillItems img={TailwindCSS} title="Tailwind CSS" height={"48px"} width={"48px"} />
                                <SkillItems img={NextJS} title="Next JS" height={"48px"} width={"48px"} />
                                <SkillItems img={Typescript} title="Typescript" height={"48px"} width={"48px"} />
                                <SkillItems img={NodeJS} title="Node JS" height={"48px"} width={"48px"} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default cashmanagement;