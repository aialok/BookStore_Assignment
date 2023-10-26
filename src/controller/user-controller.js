import UserService from "../services/user-services.js";

const userService = new UserService();

export const signUp = async (req, res) => {
  try {
    const response = await userService.create(req.body);

    return res.status(201).json({
      success: true,
      data: response,
      message: "Successfully created the user",
      err: {},
    });
  } catch (error) {
    return res.status(501).json({
      success: true,
      data: {},
      message: "Internal Server error",
      err: { error },
    });
  }
};


export const signIn = async (req, res) => {
  try {
    const response = await userService.signin(
      req.body
    );
    return res.status(200).json({
      data: response,
      message: "Successfully login",
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      message: "login failed",
      success: false,
      err: { error },
    });
  }
};


export const isAuthenticated = async (req, res) => {
  try {
    const token = await req.headers["x-access-token"];

    const response = await userService.isAuthenticated(token);

    return res.status(200).json({
      data: response,
      message: "User get authenticated",
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      message: "login failed",
      success: false,
      err: { error },
    });
  }
};