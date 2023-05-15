import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='ls:w-1/2 relative'>
                        <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                        <img src={parts} className="w-1/2 absolute right-10 top-1/2 border-white border-8 rounded-lg shadow-2xl" />
                    </div>
                    <div className='ls:w-1/2 space-y-5'>
                        <h3 className="text-3xl text-orange-500 font-bold">About Us </h3>
                        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus natus ipsa, molestias ullam asperiores ratione impedit non molestiae cupiditate nisi quis alias numquam, doloribus nesciunt?</p>
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vitae molestias tenetur quisquam repellat cum error consectetur optio? Facilis, culpa?</p>
                        <button className="btn btn-primary">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;