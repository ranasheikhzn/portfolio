import './Hero.css'
import { FaArrowRight } from "react-icons/fa";
import profile from '../../assets/profile.jpg'
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
    return (
        <div className="hero">
            <div className="h-[calc(100vh-80px)] max-w-7xl px-10 mx-auto flex justify-between items-center">
                <div className="w-3/5">
                    <p className="text-3xl font-bold text-purple-500">HEY!</p>
                    {/* <h3 className='text-6xl font-bold text-gray-100'>I&apos;m Rana Sheikh</h3> */}
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed once, initially
                            "I'm Rana Sheikh",
                            1000,
                            "I'm a MERN Stack Developer",
                            1000,
                            "I'm a Junior Web Developer",
                            1000,
                            "I'm a Front-End Developer",
                            1000,
                        ]}
                        speed={50}
                        style={{ fontSize: '50px', fontWeight: 'bold', color: "white" }}
                        repeat={Infinity}
                    />
                    <p className="mt-4 mb-6 w-full md:w-5/6 text-gray-300">Welcome to my captivating portfolio website! I am a passionate front-end web application developer with expertise in building exceptional websites using the powerful MERN stack. With 1 year of experience in the field, I bring creativity, skill, and a strong dedication to delivering remarkable digital experiences. Explore my portfolio and witness the magic of my creations!</p>
                    <div>
                        <ScrollLink to="projects" smooth={true} duration={500} offset={-80}>
                            <button className="px-7 py-3 mr-5 relative inline-flex items-center justify-center font-medium text-white bg-gray-800 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group">
                                <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                                <span className="relative">View Works</span>
                            </button>
                        </ScrollLink>

                        <ScrollLink to="contact" smooth={true} duration={500} offset={-80}>
                            <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-purple-500 transition duration-300 ease-out border-2 border-purple-500 hover:border-transparent rounded-lg group">
                                <span className="absolute inset-0 flex gap-2 items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-br from-blue-500 to-purple-600 group group-hover:translate-x-0 ease">
                                    <span>Hire Me</span>
                                    <FaArrowRight />
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Hire Me</span>
                                <span className="relative invisible">Hire Me</span>
                            </button>
                        </ScrollLink>
                    </div>
                </div>
                <div className="w-2/5">
                    <img src={profile} alt="" width={380} className="rounded-full ml-auto ring-2 ring-purple-500" />
                </div>
            </div>
        </div>
    );
};

export default Hero;