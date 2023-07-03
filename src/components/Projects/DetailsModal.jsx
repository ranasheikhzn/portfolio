import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";

const DetailsModal = ({ id, setOpenModal }) => {
    const [project, setProject] = useState({})

    useEffect(() => {
        fetch('projects.json').then(res => res.json()).then(data => {
            const project = data.find(project => project._id === id)
            setProject(project)
            console.log(project)
        })
    }, [])

    return (
        <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-hidden md:inset-0 max-h-screen flex justify-center items-center bg-gray-700 bg-opacity-50">
            <div className="relative overflow-y-auto rounded-lg w-full max-w-xl h-4/5">
                <button onClick={() => setOpenModal(false)} type="button" className="absolute top-2.5 right-2.5 text-gray-300 bg-[#6f54ef] rounded-full p-2">
                    <FaXmark />
                </button>

                <div className="bg-gradient-to-br from-[#0F2033] via-[#1B1631] to-[#0F172B] p-5 overflow-hidden rounded-lg">
                    <h3 className="mb-3 text-xl font-bold text-gray-100">{project.name}</h3>
                    <img className="w-full" src={project.image} alt="" />
                    <div className="mt-3 mb-5">
                        <h3 className="mb-3 text-xl font-bold text-gray-100">Used Technologies</h3>
                        <div className="flex gap-2 items-center flex-wrap">
                            {
                                project?.used_technologies?.map((tech, index) => <span key={index} className="px-2 py-1 bg-[#1B3F5E] text-blue-400 text-sm font-medium rounded-md">{tech}</span>)
                            }
                        </div>
                    </div>
                    <div className="mt-3">
                        <h3 className="mb-3 text-xl font-bold text-gray-100">Features</h3>
                        <ul className="list-outside list-disc pl-5 text-gray-100">
                            {
                                project?.features?.map((feature, index) => <li key={index}>{feature}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsModal;