const Map = () =>{
    return (
        <div className="map w-full my-5">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113888.98329852101!2d75.61138824335937!3d26.870764800000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5cc1ee1d545%3A0xd331570aec9c6ff8!2sTamnna%20collections!5e0!3m2!1sen!2sin!4v1727518404066!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
    )
}

export default Map;