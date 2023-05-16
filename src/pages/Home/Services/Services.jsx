import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import useTitle from "../../hooks/useTitle";

const Services = () => {
    useTitle('Ride Revolution - Services');
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('https://ride-revolution-server.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div className="mt-4 mb-5">
            <div className="text-center space-y-3">
                <h3 className="text-3xl text-primary font-bold">Our Services</h3>
                <h2 className="text-5xl">Our Service Area</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or randomized <br /> words which do not look even slightly believable.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;