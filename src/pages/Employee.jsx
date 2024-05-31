import { Grid, Typography, Avatar, Slide, Divider } from "@mui/material";
import styles from "../styles/Employee.module.css";
import { employees } from "../constent";

const Employee = () => {
  const employeeContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  };

  const avatarStyle = {
    width: "200px",
    height: "200px",
    transition: "opacity 0.3s ease-in-out",
  };

  return (
    <div>
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Slide
          direction="right"
          in={true}
          timeout={800}
          mountOnEnter
          unmountOnExit
        >
          <div>
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              style={{ color: "#8B5CF6" }}
              className="animated-heading"
            >
              Our Team
            </Typography>
            <Divider
              style={{ borderBottomWidth: "3px", backgroundColor: "#8B5CF6" }}
            />
          </div>
        </Slide>
      </div>
      <div class="flex flex-wrap justify-center">

      <div class="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
        <div class="rounded-t-lg h-32 overflow-hidden">
          <img
            class="object-cover object-top w-full"
            src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Mountain"
          />
        </div>
        <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <img
            class="object-cover object-center h-32"
            src="/src/assets/Venky.png"
            alt="Woman looking front"
          />
        </div>
        <div class="text-center mt-2">
          <h2 class="font-semibold">Venkatesh Pujari</h2>
          <p class="text-gray-500">Fonder of decency construction</p>
        </div>
        <div class="p-4 border-t mx-8 mt-2">
          <a
            href="https://www.instagram.com/venkatesh_pujari05?igsh=bHUxMW8xZzI0bmVo&utm_source=qr "
            class="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2 text-center"
          >
            Follow
          </a>
        </div>
      </div>

      <div class="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
        <div class="rounded-t-lg h-32 overflow-hidden">
          <img
            class="object-cover object-top w-full"
            src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Mountain"
          />
        </div>
        <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <img
            class="object-cover object-center h-32"
            src="/src/assets/Anil.png"
            alt="Woman looking front"
          />
        </div>
        <div class="text-center mt-2">
          <h2 class="font-semibold">Anil Hosur</h2>
          <p class="text-gray-500">Co-Fonder of decency construction</p>
        </div>
        <div class="p-4 border-t mx-8 mt-2">
          <a
            href="https://www.instagram.com/mr_anil_reddy98/?igsh=bnl2ZWUxY3Eyc2ht"
            class="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2 text-center"
          >
            Follow
          </a>
        </div>
      </div>
      <div class="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
        <div class="rounded-t-lg h-32 overflow-hidden">
          <img
            class="object-cover object-top w-full"
            src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Mountain"
          />
        </div>
        <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <img
            class="object-cover object-center h-32"
            src="/src/assets/Kavita.jpg"
            alt="Woman looking front"
          />
        </div>
        <div class="text-center mt-2">
          <h2 class="font-semibold">Kavita Hawaladar</h2>
          <p class="text-gray-500">Architecture</p>
        </div>
        <div class="p-4 border-t mx-8 mt-2">
          <a
            href="/#"
            class="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2 text-center"
          >
            Follow
          </a>
        </div>
      </div>
      <div class="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
        <div class="rounded-t-lg h-32 overflow-hidden">
          <img
            class="object-cover object-top w-full"
            src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Mountain"
          />
        </div>
        <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <img
            class="object-cover object-center h-32"
            src="/src/assets/Ashok.jpg"
            alt="Woman looking front"
          />
        </div>
        <div class="text-center mt-2">
          <h2 class="font-semibold">Ashok Halloli</h2>
          <p class="text-gray-500">BE Civil Engineer</p>
        </div>
        <div class="p-4 border-t mx-8 mt-2">
          <a
            href="https://www.instagram.com/ahalolli4/?igsh=ajVmdDM0OXl2azZ5"
            class="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2 text-center"
          >
            Follow
          </a>
        </div>
      </div>
   
      <div class="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
        <div class="rounded-t-lg h-32 overflow-hidden">
          <img
            class="object-cover object-top w-full"
            src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Mountain"
          />
        </div>
        <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <img
            class="object-cover object-center h-32"
            src="/src/assets/MyPic.jpeg"
            alt="Woman looking front"
          />
        </div>
        <div class="text-center mt-2">
          <h2 class="font-semibold">Saikumar B</h2>
          <p class="text-gray-500">Engineer</p>
        </div>
        <div class="p-4 border-t mx-8 mt-2">
          <a
            href="https://www.instagram.com/sai.sb___17/?igshid=dmxobDlmeTV4emlq"
            class="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2 text-center"
          >
            Follow
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Employee;
