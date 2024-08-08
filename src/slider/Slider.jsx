import React from "react";
import styled, { keyframes, css } from "styled-components";

function Slider() {
  const row1 = [
    "https://www.theweek.in/content/dam/week/news/health/images/2023/6/4/blood-donation.jpg.transform/schema-16x9/image.jpg",
    "https://www.elcaminohealth.org/sites/default/files/styles/2_1__600x300/public/2022-03/blood-donation-1100x355.jpg?h=d5e401ee&itok=TmAOclVV",
    "https://health.gov.tt/sites/default/files/styles/large/public/inline-images/Blood%20Bank%20logo%202022-03.png?itok=0H-a6QNb",
  ];

  const row2 = [
    "https://www.beatoapp.com/blog/wp-content/uploads/2024/03/Benefits-of-Blood-Donation.jpg",
    "https://img.jagranjosh.com/images/2024/June/1362024/worl.webp",
    "https://media.istockphoto.com/id/1397666591/vector/world-blood-donor-day-donate-blood-save-life-text-and-white-red-blood-bag-symbol-on-dark.jpg?s=612x612&w=0&k=20&c=ui88mzocP7ygYBFXDxy5w7E1-o6PIg0n2hMDbtazuqE="
  ];

  return (
    <AppContainer>
      <Wrapper>
        <Text>With Great Outcomes.</Text>
        <Note>Our customers have gotten offers from awesome companies.</Note>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} alt={`Row 1 Image ${index + 1}`} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} alt={`Row 1 Image ${index + 1}`} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} alt={`Row 2 Image ${index + 1}`} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} alt={`Row 2 Image ${index + 1}`} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

export default Slider;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  @media (max-width: 768px) {
    height: auto;
    padding: 1rem 0.5rem;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 10px;
  color: red;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Note = styled.div`
  font-size: 1.125rem;
  font-weight: 200;
  margin-bottom: 40px;
  color: white;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  user-select: none;
  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 20vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 20vmin, 30rem) / 10);

  @media (max-width: 768px) {
    width: clamp(8rem, 1rem + 20vmin, 25rem);
    padding: calc(clamp(8rem, 1rem + 20vmin, 25rem) / 10);
  }

  @media (max-width: 480px) {
    width: clamp(6rem, 1rem + 20vmin, 20rem);
    padding: calc(clamp(6rem, 1rem + 20vmin, 20rem) / 10);
  }
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media (max-width: 768px) {
    padding: 3px 15px;
  }

  @media (max-width: 480px) {
    padding: 2px 10px;
  }
`;
