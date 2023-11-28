import { bcryptPass } from "@/features/bcrypt";
import connectDb from "@/features/connectdb";
import { User, checkUserExists } from "@/models/User";
import moment from "moment";

export default async (req, res) => {
  await connectDb();
  if (req.method === "POST") {
    const { username, password, email, first_name, last_name } = req.body;
    if (!username || !password || !email || !first_name) {
      return res.status(401).json({
        success: false,
        message: "Please fill all fields!",
      });
    }
    // check the user already exist or not
    if (checkUserExists(email) === false) {
      let hashedPassword = await bcryptPass.hash(password);

      console.log(hashedPassword);
      const newUser = new User();
      newUser.first_name = first_name;
      newUser.last_name = last_name;
      newUser.username = username;
      newUser.email = email;
      newUser.password = hashedPassword;
      newUser.registeredAt = moment().format("MMMM Do YYYY, h:mm:ss a");
      await newUser.save();

      return res
        .status(200)
        .json({ success: true, message: "User Registered Successfully" });
    } else {
      return res
        .status(404)
        .json({ success: false, message: "User Already Exists" });
    }
  } else {
    return res
      .status(404)
      .json({ success: false, message: "Not Correct method" });
  }
};
