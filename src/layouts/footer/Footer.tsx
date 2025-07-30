import { INSTALL_APP } from "../../assets";
import * as S from "./styled";

const footerContent = [
  {
    title: "About Us",
    items: [
      "Careers",
      "Company Details",
      "Terms & Conditions",
      "Help Center",
      "Privacy Policy",
      "Affiliate",
    ],
  },
  {
    title: "Products",
    items: [
      "NFT Marketplace",
      "Slingshot",
      "Swaps",
      "NFT Launchpad",
      "Runes Platform",
      "Creator Dashboard",
    ],
  },
  {
    title: "Resources",
    items: ["Support", "API", "Feature Requests", "Trust & Safety", "Sitemap"],
  },
  {
    title: "Contact Us",
    items: ["support@ztech.email", "affiliate@ztech.com"],
    installApp: true,
  },
];

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.FooterGrid>
        {footerContent.map((col, index) => (
          <S.FooterColumn key={index}>
            <S.Title>{col.title}</S.Title>
            {col.items.map((item, i) => (
              <span key={i}>{item}</span>
            ))}
            {col.installApp && (
              <S.InstallApp>
                <img src={INSTALL_APP} alt="Install App" />
              </S.InstallApp>
            )}
          </S.FooterColumn>
        ))}
      </S.FooterGrid>
    </S.FooterWrapper>
  );
};

export default Footer;
