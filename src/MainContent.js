import "./App.css";
import website from "./website.png";
const MainContent = () => {
  return (
    <>
      <div className="home-banner">
        <div className="text-background">
          <h1 className="text-white text-6xl">
            NEED A Mental Health PROVIDER?
          </h1>
          <h6 className="text-white text-2xl mt-3">No Look Further</h6>
          <p className="text-white text-2xl mt-3">
            Our goal is to provide a safe, comfortable, and warm environment so
            that you can openly discuss your mental health needs.
          </p>
          <button className="button text-black rounded-3xl text-xs pt-3 pb-3 pr-10 pl-10 mt-3 font-bold">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex flex-row founder-section pt-5 pb-5">
        <img
          src="https://media.istockphoto.com/id/1712926299/photo/neurology-doctor-and-planning-surgery-with-tablet-in-office-with-x-ray-results-and-patient.jpg?s=612x612&w=0&k=20&c=Bg7XZOiE1LQT2RPP9x3zHOsO5k7voncI8VLSmwr-pfI="
          alt="avatar1"
          className="w-80 rounded-xl founder-image"
        />
        <div className="founder-content flex flex-col">
          <div className="mr-10 , ml-20">
            <h1 className="text-3xl mb-3 text-black font-bold">
              Meet the Founder
            </h1>
            <h3 className="text-xl text-black font-medium">
              Lakeshion Appliton
            </h3>
            <h3 className="text-xl mb-3 text-black font-medium">
              FNC-C, PMHNP-BC
            </h3>
            <p className="text-1xl text-black font-semibold">
              "Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book." - Maitt Haig
            </p>
            <button className="button mt-3 text-black rounded-3xl text-xs pt-3 pb-3 pr-10 pl-10 mt-3 font-bold">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="focus-section pt-5 pb-5">
        <h1 className="text-center text-3xl font-bold pt-10 pb-10">
          Our Treatment Focus
        </h1>
        <div className="flex flex-row justify-center">
          <img
            src="https://media.istockphoto.com/id/649195292/photo/sick-patient-sitting-on-bed.jpg?s=612x612&w=0&k=20&c=Bt1me7_D86FCn0lkro2Pe-orB4wkZIRTq5scsv4qAdk="
            alt="avatar2"
            style={{
              borderRadius: "50%",
              height: "200px",
              width: "200px",
              alignSelf: "center",
              marginRight: "20px",
            }}
          />
          <div style={{ width: "100%", maxWidth: "400px", marginLeft: "20px" }}>
            <h1 className="text-2xl font-bold mt-3 mb-3">Mental Health</h1>
            <p className="text-1xl text-black font-semibold">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </p>
            <button className="button mt-3 text-black rounded-3xl text-xs pt-3 pb-3 pr-10 pl-10 mt-3 font-bold">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="focus-section pt-5 pb-5">
        <div className="flex flex-row justify-center">
          <img
            src="https://www.shutterstock.com/image-photo/man-psychologist-theraphy-social-problems-600nw-2492805179.jpg"
            alt="avatar2"
            style={{
              borderRadius: "50%",
              height: "200px",
              width: "200px",
              alignSelf: "center",
              marginLeft: "20px",
              order: "1",
            }}
          />
          <div style={{ width: "100%", maxWidth: "400px", marginLeft: "20px" }}>
            <h1 className="text-2xl font-bold mt-3 mb-3">Addiction Recovery</h1>
            <p className="text-1xl text-black font-semibold">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </p>
            <button className="button mt-3 text-black rounded-3xl text-xs pt-3 pb-3 pr-10 pl-10 mt-3 font-bold">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="focus-section pt-5 pb-5">
        <div className="flex flex-row justify-center">
          <img
            src="https://www.olympiapharmacy.com/wp-content/uploads/2018/12/45283413_m.jpg"
            alt="avatar2"
            style={{
              borderRadius: "50%",
              height: "200px",
              width: "200px",
              alignSelf: "center",
              marginLeft: "20px",
              order: "1",
            }}
          />
          <div style={{ width: "100%", maxWidth: "400px", marginLeft: "20px" }}>
            <h1 className="text-2xl font-bold mt-3 mb-3">
              Supreivsed Medical Weight Loss
            </h1>
            <p className="text-1xl text-black font-semibold">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </p>
            <button className="button mt-3 text-black rounded-3xl text-xs pt-3 pb-3 pr-10 pl-10 mt-3 font-bold">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div
        className="pt-5 pb-5 bg-black text-white"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="https://wallpapers.com/images/hd/golden-quotation-marks-texture-kif7brjsjblhbkks-kif7brjsjblhbkks.png"
          alt="quatationPic"
          className="w-10"
        />
        <p className="text-medium mt-4">
          "Classical literature, discovered the undoubtable source"
        </p>
      </div>
      <div className="focus-section pt-5 pb-5">
        <h1 className="text-2xl font-bold mt-3 mb-3 text-center">
          Our Serivces
        </h1>
        <div className="flex flex-row justify-center">
          <div className="w-24 text-center flex flex-col justify-center items-center pt-3 pb-3 pl-4 pr-4 mr-2">
            <div className="bg-yellow-100 w-10 rounded-full">
              <img src={website} alt="service-img" width="50" />
            </div>
            <h1 className=" mt-2 text-medium font-medium">
              Psycriatric Evalution
            </h1>
          </div>
          <div className="w-24 text-center flex flex-col justify-center items-center pt-3 pb-3 pl-4 pr-4 mr-2">
            <div className="bg-yellow-100 w-10 rounded-full">
              <img src={website} alt="service-img" width="50" />
            </div>
            <h1 className=" mt-2 text-medium font-medium">
              Psycriatric Evalution
            </h1>
          </div>
          <div className="w-24 text-center flex flex-col justify-center items-center pt-3 pb-3 pl-4 pr-4 mr-2">
            <div className="bg-yellow-100 w-10 rounded-full">
              <img src={website} alt="service-img" width="50" />
            </div>
            <h1 className=" mt-2 text-medium font-medium">
              Psycriatric Evalution
            </h1>
          </div>
          <div className="w-24 text-center flex flex-col justify-center items-center pt-3 pb-3 pl-4 pr-4 mr-2">
            <div className="bg-yellow-100 w-10 rounded-full">
              <img src={website} alt="service-img" width="50" />
            </div>
            <h1 className=" mt-2 text-medium font-medium">
              Psycriatric Evalution
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
