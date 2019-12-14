import React from "react";
import styled from "@emotion/styled";
import { Link, Grid, Box, Typography } from "@material-ui/core";
import {
  AspectRatio,
  Assessment,
  Email,
  FastForward,
  GitHub,
  Http,
  LinkedIn,
  PictureAsPdf,
  Storage,
  TableChart
} from "@material-ui/icons";
import Particles from "../components/particles";

const MAX_WIDTH = 1024;
const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 512px;
  color: white;
  background-color: royalblue;
  box-shadow: 0 3px 6px #6a6a6a;
`;

const Steps = styled.ul`
  list-style: none;
`;

const Step = styled.li`
  padding: 12px 0;
  &:before {
    content: "✓";
    padding-right: 8px;
  }
`;

const Banner = () => {
  const ref = React.useEffect(() => {});
  return (
    <BannerContainer id="banner-particles">
      <Particles style={{ position: "absolute" }} />
      <Box m="auto" maxWidth={MAX_WIDTH} position="relative" px={[1]} py={[6]}>
        <Box>
          <Grid container direction="row" justify="space-between">
            <Grid container direction="row" justify="center">
              <Box m="auto" zIndex="0" position="absolute">
                <img
                  style={{ width: "300px", height: "auto", opacity: "0.4" }}
                  src="/eigenfunctor_logo.png"
                />
              </Box>
            </Grid>
            <Box zIndex="1">
              <Typography variant="h5">
                Engage your users with scalable web applications!
              </Typography>
              <Typography variant="h6">
                <Steps>
                  <Step>
                    Build robust full-stack isomorphic web applications
                  </Step>
                  <Step>
                    Authenticate with all sorts of providers
                    (Google/Facebook/Twitter)
                  </Step>
                  <Step>
                    Synchronize your service mesh to end-user workflows
                  </Step>
                  <Step>
                    Configure and deploy application containers continuously to
                    Kubernetes
                  </Step>
                </Steps>
              </Typography>
            </Box>
          </Grid>
        </Box>
      </Box>
    </BannerContainer>
  );
};

const AboutMeContainer = styled(Box)`
  margin: auto;
`;

const Description = styled(Typography)`
  font-size: 1.1rem;
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  padding: 6px;
  i {
    display: inline-flex;
    margin: auto;
    vertical-align: middle;
  }
`;

const AboutMe = () => {
  return (
    <AboutMeContainer maxWidth={MAX_WIDTH}>
      <Grid container direction="row" justify="flex-start">
        <Grid item md={4}>
          <Box m={[3]} width={250} height={200}>
            <img src="/profile-photo.jpg" />
          </Box>
        </Grid>
        <Grid item md={8}>
          <Box m={[3]}>
            <Typography variant="h5">
              <strong>Armin Taheri</strong>, Full-stack Web Developer
            </Typography>
            <Typography>
              <strong>McGill University </strong> B.Sc Software Engineering,
              Minor Mathematics
            </Typography>

            <br />
            <br />
            <Description>Welcome to eigenfunctor.io!</Description>
            <br />
            <br />
            <Description>
              I am a full-stack web developer with 4 years of experience. I
              adapt very quickly to any project and can bring a lot of insight
              and value to the table. My mission is to work closely with your
              team and bring to your software infrastructure the best end-user
              experience from modern technology, cloud services, and computer
              science theory.
            </Description>
            <br />
            <br />
            <Grid container direction="column">
              <Description>
                <Http fontSize="large" />: &nbsp;
                <Link href="https://eigenfunctor.io">eigenfunctor.io</Link>
              </Description>
              <Description>
                <Email fontSize="large" />: &nbsp;
                <Link href="mailto:armin@eigenfunctor.io">
                  armin@eigenfunctor.io
                </Link>
              </Description>
              <Description>
                <GitHub fontSize="large" />: &nbsp;
                <Link href="https://github.com/eigenfunctor">
                  github.com/eigenfunctor
                </Link>
              </Description>
              <Description>
                <LinkedIn fontSize="large" />: &nbsp;
                <Link
                  download
                  href="https://www.linkedin.com/in/armin-t-55b944199"
                >
                  Connect to me on LinkedIn!
                </Link>
              </Description>
              <Description>
                <PictureAsPdf fontSize="large" />: &nbsp;
                <Link download href="/armin_taheri_resume.pdf">
                  Save my resume!
                </Link>
              </Description>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </AboutMeContainer>
  );
};

const ServiceCard = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 16px auto;
  border: 1px solid royalblue;
  box-shadow: 2px 2px 7px gray;
  width: 250px;
  min-height: 400px;
`;

const ServiceCards = () => {
  return (
    <Box m="auto" maxWidth={MAX_WIDTH} px={[1]} py={[6]}>
      <Grid container direction="row" justify="center">
        <ServiceCard m={[3]} px={[3]} py={[7]}>
          <Box>
            <AspectRatio style={{ fontSize: 50 }} />
          </Box>
          <Box>
            <Typography>
              <br />
              <strong>
                Extensive knowledge in modular, mobile-first, responsive UI and
                2D visualisation development with React.js, styled-components,
                Material-UI, and Next.js.
              </strong>
            </Typography>
          </Box>
        </ServiceCard>
        <ServiceCard m={[3]} px={[3]} py={[7]}>
          <Box>
            <Assessment style={{ fontSize: 50 }} />
          </Box>
          <Box>
            <Typography>
              <strong>
                Extensive knowledge in the WebGL graphics pipeline and
                abstraction libraries such as three.js and react-three-fiber for
                3D vizualization development.
              </strong>
            </Typography>
          </Box>
        </ServiceCard>
        <ServiceCard m={[3]} px={[3]} py={[7]}>
          <Box>
            <Http style={{ fontSize: 50 }} />
          </Box>
          <Box>
            <Typography>
              <strong>
                GraphQL and RESTful APIs written in robust and modular
                Typescript modules built and deployed into node.js containers.
              </strong>
            </Typography>
          </Box>
        </ServiceCard>
        <ServiceCard m={[3]} px={[3]} py={[7]}>
          <Box>
            <Storage style={{ fontSize: 50 }} />
          </Box>
          <Box>
            <Typography>
              <strong>
                Experienced in database technologies such as SQL based RDMS
                (Postgres), client synchronized document stores
                (CouchDB/PouchDB), and high throughput data caches (Redis).
              </strong>
            </Typography>
          </Box>
        </ServiceCard>
        <ServiceCard m={[3]} px={[3]} py={[7]}>
          <Box>
            <TableChart style={{ fontSize: 50 }} />
          </Box>
          <Box>
            <Typography>
              <strong>
                Experienced in scientific computing with Python libraries such
                as Tensorflow, Numpy, Pandas, and SciPy.
              </strong>
            </Typography>
          </Box>
        </ServiceCard>
        <ServiceCard m={[3]} px={[3]} py={[7]}>
          <Box>
            <FastForward style={{ fontSize: 50 }} />
          </Box>
          <Box>
            <Typography>
              <strong>
                Knowledge in building and consuming gRPC APIs for fast, fault
                tolerant, low overhead, HTTP/2 based internal service
                interactions.
              </strong>
            </Typography>
          </Box>
        </ServiceCard>
      </Grid>
    </Box>
  );
};

const Home = () => {
  return (
    <Grid container direction="column" justify="center">
      <Banner />
      <br />
      <AboutMe />
      <ServiceCards />
    </Grid>
  );
};

export default Home;
