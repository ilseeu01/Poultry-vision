/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import { useState } from "react";
import { useHistory } from "react-router-dom";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiInput from "components/VuiInput";
import VuiButton from "components/VuiButton";
import VuiSwitch from "components/VuiSwitch";

// Vision UI Dashboard React example components
import PageLayout from "common/LayoutContainers/PageLayout";

function SignIn() {
  const history = useHistory();
  const [rememberMe, setRememberMe] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/dashboard");
  };

  return (
    <PageLayout>
      <VuiBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{
          background: "linear-gradient(135deg, #FF6B35 0%, #FF8C69 100%)",
        }}
      >
        <VuiBox
          sx={{
            maxWidth: "450px",
            width: "100%",
            margin: "0 20px",
            backgroundColor: "rgba(255, 255, 255, 0.98)",
            borderRadius: "24px",
            padding: "48px 40px",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
          }}
        >
          {/* Logo and Title */}
          <VuiBox mb={4} textAlign="center">
            <VuiTypography
              variant="h2"
              fontWeight="bold"
              sx={{
                background: "linear-gradient(135deg, #FF6B35 0%, #FF8C69 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 1,
              }}
            >
              🐓 꼬꼬알리미
            </VuiTypography>
            <VuiTypography variant="body2" color="text" fontWeight="regular">
              스마트 양계장 관리 시스템
            </VuiTypography>
          </VuiBox>

          {/* Form */}
          <VuiBox component="form" role="form" onSubmit={handleSubmit}>
            <VuiBox mb={3}>
              <VuiBox mb={1}>
                <VuiTypography
                  component="label"
                  variant="button"
                  fontWeight="medium"
                  sx={{ color: "#1a1f37" }}
                >
                  이메일
                </VuiTypography>
              </VuiBox>
              <VuiInput
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  backgroundColor: "#f8f9fa !important",
                  border: "2px solid #e2e8f0",
                  borderRadius: "12px",
                  "&:focus-within": {
                    border: "2px solid #FF6B35",
                  },
                }}
              />
            </VuiBox>

            <VuiBox mb={3}>
              <VuiBox mb={1}>
                <VuiTypography
                  component="label"
                  variant="button"
                  fontWeight="medium"
                  sx={{ color: "#1a1f37" }}
                >
                  비밀번호
                </VuiTypography>
              </VuiBox>
              <VuiInput
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  backgroundColor: "#f8f9fa !important",
                  border: "2px solid #e2e8f0",
                  borderRadius: "12px",
                  "&:focus-within": {
                    border: "2px solid #FF6B35",
                  },
                }}
              />
            </VuiBox>

            <VuiBox display="flex" alignItems="center" mb={4}>
              <VuiSwitch
                color="info"
                checked={rememberMe}
                onChange={handleSetRememberMe}
              />
              <VuiTypography
                variant="caption"
                fontWeight="regular"
                onClick={handleSetRememberMe}
                sx={{
                  cursor: "pointer",
                  userSelect: "none",
                  ml: 1,
                  color: "#4a5568",
                }}
              >
                로그인 상태 유지
              </VuiTypography>
            </VuiBox>

            <VuiBox>
              <VuiButton
                type="submit"
                fullWidth
                size="large"
                sx={{
                  background: "linear-gradient(135deg, #FF6B35 0%, #FF8C69 100%)",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "16px",
                  letterSpacing: "0.5px",
                  padding: "14px",
                  borderRadius: "12px",
                  textTransform: "none",
                  boxShadow: "0 4px 15px rgba(255, 107, 53, 0.4)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #E65A2E 0%, #E67A5C 100%)",
                    boxShadow: "0 6px 20px rgba(255, 107, 53, 0.6)",
                  },
                }}
              >
                로그인
              </VuiButton>
            </VuiBox>
          </VuiBox>

          {/* Footer */}
          <VuiBox mt={3} textAlign="center">
            <VuiTypography variant="caption" color="text" fontWeight="regular">
              AI 기반 스마트 팜 모니터링
            </VuiTypography>
          </VuiBox>
        </VuiBox>
      </VuiBox>
    </PageLayout>
  );
}

export default SignIn;
