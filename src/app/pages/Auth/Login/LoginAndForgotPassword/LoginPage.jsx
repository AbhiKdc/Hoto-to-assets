import { useJumboDialog } from "@jumbo/components/JumboDialog/hooks/useJumboDialog";
import JumboTextField from "@jumbo/components/JumboFormik/JumboTextField";
import Div from "@jumbo/shared/Div";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { getAssetPath } from "app/utils/appHelpers";
import { ASSET_IMAGES } from "app/utils/constants/paths";
// import { clearErrors, login } from "app/redux/actions/userAction";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as yup from "yup";
// import { getAssetPath } from "../../../app/utils/appHelpers";
// import { ASSET_IMAGES } from "../../../app/utils/constants/paths";

const validationSchema = yup.object({
  user_name: yup.string().required("User Name is Required"),
  password: yup.string("Enter your password").required("Password is required"),
});

const LoginPage = ({ disableSmLogin }) => {
//   const { error, loading, isAuthenticated, user } = useSelector(
//     (state) => state.userReducer
//   );
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const { showDialog, hideDialog } = useJumboDialog();


  const navigate = useNavigate();
  const dispatch = useDispatch();

//   useEffect(() => {
//     if (error) {
//       Swal.fire({
//         icon: "error",
//         title: "Invalid Credentials",
//         text: error,
//         customClass: {
//           container: "popupImportant",
//         },
//       });
//       dispatch(clearErrors());
//     }
//     if (isAuthenticated) {
//       navigate("/dashboard");
//     }
//     // } else if (isAuthenticated && user.role != "admin") {
//     //   navigate("/mycontent");
//     // }
//   }, [dispatch, error, isAuthenticated]);

  const onSignIn = (values) => {
    // dispatch(login(values?.user_name, values?.password, setSubmitting));
  };

  const handleForgotPassword = () => {
    showDialog({
      title: "Enter Username For Recovery",
    //   content: <ForgotPasswordForm hideDialogue={hideDialog} />,
    });
  };

  return (
    // <FullViewContent>

    <Div
      sx={{
        width: 420,
        maxWidth: "100%",
        margin: "auto",
      }}>
      <Card
        sx={{
          display: "flex",
          minWidth: 0,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* <CardContent
          sx={{
            flex: 1,
            // position: "relative",
            height: "100%",
            // width: "100px",
            // top: 120,
            ml: 1,
            // background: `url(${getAssetPath(
            //   `${ASSET_IMAGES}/VENEERPRO_KDC_LOGO.png`,
            //   "640x428"
            // )}) no-repeat center`,
            // backgroundSize: "contain",
            // "&::after": {
            //   display: "inline-block",
            //   position: "absolute",
            //   content: `''`,
            //   inset: 0,
            //   backgroundColor: alpha("#0267a0", 0.65),
            // },
          }}
        >
          <Div
            sx={{
              display: "flex",
              minWidth: 0,
              flex: 1,
              flexDirection: "column",
              color: "common.white",
              position: "relative",
              zIndex: 1,
              height: "100%",
            }}
          >
            <Div sx={{ mt: "auto" }}>
              <img src={getAssetPath(
                `/images/elizeu-dias.jpg`,
              )} alt="" style={{ width: "100%", height: "100%" }} />
            </Div>
          </Div>
        </CardContent> */}
        <CardContent sx={{ flex: 1, py: 4, pl: 2 }}>
          <Formik
            validateOnChange={true}
            initialValues={{
              user_name: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={onSignIn}
          >
            {({ values }) => (
              <Form style={{ textAlign: "left" }} noValidate autoComplete="off">
                <Div sx={{ mt: 1, mb: 3 }}>
                  <JumboTextField
                    fullWidth
                    size="medium"
                    name="user_name"
                    label="User Name"
                  />
                </Div>
                <Div sx={{ mt: 1, mb: 2 }}>
                  <JumboTextField
                    fullWidth
                    size="medium"
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"} // Step 4
                  />
                </Div>
                <Div sx={{ mb: 1 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={showPassword}
                        onChange={() => setShowPassword(!showPassword)}
                      />
                    }
                    label="Show Password"
                  />
                </Div>
                <LoadingButton
                  fullWidth
                  variant="contained"
                  size="medium"
                  type="submit"
                  sx={{ mb: 3 }}
                  loading={isSubmitting}
                >
                  Sign In
                </LoadingButton>

                {!disableSmLogin && (
                  <React.Fragment>
                    <Typography
                      variant={"body1"}
                      mb={2}
                      sx={{
                        "&:hover": { cursor: "pointer", color: "blue" },
                        width: "40%",
                      }}
                      onClick={handleForgotPassword}
                    >
                      Forgot Password?
                    </Typography>
                  </React.Fragment>
                )}
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Div>
    // </FullViewContent>
  );
};

export default LoginPage;
