// Importing logos

import UdeMLogo from "../../../assets/Logos/Escudo_Universidad_de_Medellin.svg";
import AGEOCOLLogo from "../../../assets/Logos/AGEOCOL.png";
import WINGLogo from "../../../assets/Logos/wing.png";
import SGCLogo from "../../../assets/Logos/Servicio Geológico Colombiano.jpg";
import IHLLALogo from "../../../assets/Logos/ihlla.png";
import CEGALogo from "../../../assets/Logos/cega.jpg";
import MARNLogo from "../../../assets/Logos/Ministerio de Medio Ambiente.png";
import INEELLogo from "../../../assets/Logos/ineel.png";
import IBEROLogo from "../../../assets/Logos/logo - IBERO.png";
import INRSLogo from "../../../assets/Logos/inrs icon.png";
import lavalLogo from "../../../assets/Logos/laval.png";
import CanMetLogo from "../../../assets/Logos/Government of Canada.png";
import RENNES1Logo from "../../../assets/Logos/rennes.png";
import BRGMLogo from "../../../assets/Logos/brgm.png";
import UDSPLogo from "../../../assets/Logos/padova.png";
import INGVLogo from "../../../assets/Logos/ingv.png";
import MonsLogo from "../../../assets/Logos/umons.png";
import GeoZSLogo from "../../../assets/Logos/GeoZS.jpg";
import HRLogo from "../../../assets/Logos/hr.jpg";
import KTHLogo from "../../../assets/Logos/kth.png";
import ICGCLogo from "../../../assets/Logos/icgc.png";
import AkitaLogo from "../../../assets/Logos/akita.jpg";
import IRSMLogo from "../../../assets/Logos/irsm.svg";
import URGELogo from "../../../assets/Logos/URGE Energy.jpg";
import UALogo from "../../../assets/Logos/University of Auckland.png";
import ENPCLogo from "../../../assets/Logos/enpc.png";
import CDERLogo from "../../../assets/Logos/cder.jpg";
import UPTCLogo from "../../../assets/Logos/logo UPTC España.png";
import EOSLogo from "../../../assets/Logos/Logo EOS.png";

// Importing background images
import UdeMImg from "../../../assets/Institutions Images/Colombia UdeM.jpg";
import AGEOCOLImg from "../../../assets/Institutions Images/Colombia AGEOCOL.jpg";
import WINGImg from "../../../assets/Institutions Images/Women in geothermal Energy.png";
import SGCImg from "../../../assets/Institutions Images/Campus SGC.jpg";
import IHLLAImg from "../../../assets/Institutions Images/RIGS.jpg";
import CEGAImg from "../../../assets/Institutions Images/fondo CEGA Chile.jpg";
import MARNImg from "../../../assets/Institutions Images/Ministerio El Salvador.jpg";
import INEELImg from "../../../assets/Institutions Images/INEEL mexico.jpg";
import IBEROImg from "../../../assets/Institutions Images/Edificio Rectoría IBERO.jpg";
import INRSImg from "../../../assets/Institutions Images/INRS imagen.jpg";
import lavalImg from "../../../assets/Institutions Images/Univ Laval Canada.jpeg";
import CanMetImg from "../../../assets/Institutions Images/Canada CanMet Energy.jpg";
import RENNES1Img from "../../../assets/Institutions Images/France Rennes.jpg";
import BRGMImg from "../../../assets/Institutions Images/BRGM background.png";
import UDSPImg from "../../../assets/Institutions Images/Padova Italy.jpg";
import INGVImg from "../../../assets/Institutions Images/INGV italia Napoli.jpg";
import MonsImg from "../../../assets/Institutions Images/UMons.jpg";
import GeoZSImg from "../../../assets/Institutions Images/Slovenia GeoZS2.jpg";
import HRImg from "../../../assets/Institutions Images/Iceland ISE.jpeg";
import KTHImg from "../../../assets/Institutions Images/KTH Suecia.png";
import ICGCImg from "../../../assets/Institutions Images/ICCG Cataluña España.jpg";
import AkitaImg from "../../../assets/Institutions Images/akita Japon.jpg";
import IRSMImg from "../../../assets/Institutions Images/INRS imagen.jpg";
import URGEImg from "../../../assets/Institutions Images/Urge Image.png";
import UAImg from "../../../assets/Institutions Images/University of Auckland Background.jpg";
import ENPCImg from "../../../assets/Institutions Images/Argelia Ecole National Polytecnique Constantine.jpg";
import CDERImg from "../../../assets/Institutions Images/Algeria CDER.jpg";
import UPTCImg from "../../../assets/Institutions Images/fondo UPTC España.jpg";
import EOSImg from "../../../assets/Institutions Images/fondo empresa EOS.png";

export const institutions = [
  {
    countryName: "Colombia",
    name: "Universidad de Medellín",
    contraction: "UdeM",
    logo: UdeMLogo,
    background: UdeMImg,
    backgroundPath: "../../../assets/Institutions Images/Colombia UdeM.jpg",
    website: "https://www.udem.edu.co",
  },
  {
    countryName: "Colombia",
    name: "Asociación Geotérmica Colombiana",
    contraction: "AGEOCOL",
    logo: AGEOCOLLogo,
    background: AGEOCOLImg,
    backgroundPath: "../../../assets/Institutions Images/Colombia AGEOCOL.jpg",
    website: "https://www.ageocol.org",
  },
  {
    countryName: "Colombia",
    name: "Women In Geothermal",
    contraction: "WING",
    logo: WINGLogo,
    background: WINGImg,
    backgroundPath:
      "../../../assets/Institutions Images/Women in geothermal Energy.png",
    website: "https://www.ageocol.org/wing-colombia",
  },
  {
    countryName: "Colombia",
    name: "Servicio Geológico Colombiano",
    contraction: "SGC",
    logo: SGCLogo,
    background: SGCImg,
    backgroundPath: "../../../assets/Institutions Images/Campus SGC.jpg",
    website: "https://www.sgc.gov.co/",
  },
  {
    countryName: "Argentina",
    name: "Instituto de Hidrologia de Llanuras",
    contraction: "IHLLA",
    logo: IHLLALogo,
    background: IHLLAImg,
    backgroundPath: "../../../assets/Institutions Images/RIGS.jpg",
    website: "https://ihlla.conicet.gov.ar/",
  },
  {
    countryName: "Chile",
    name: "Centro de Excelencia en Geotermia de los Andes",
    contraction: "CEGA",
    logo: CEGALogo,
    background: CEGAImg,
    backgroundPath: "../../../assets/Institutions Images/fondo CEGA Chile.jpg",
    website: "http://www.cega-uchile.cl/",
  },
  {
    countryName: "Salvador",
    name: "Ministerio de Medio Ambiente, Gobierno de el Salvador",
    contraction: "MARN",
    logo: MARNLogo,
    background: MARNImg,
    backgroundPath:
      "../../../assets/Institutions Images/Ministerio El Salvador.jpg",
    website: "https://www.marn.gob.sv/",
  },
  {
    countryName: "Mexico",
    name: "Instituto Nacional de Electricidad y Energías Limpias",
    contraction: "INEEL",
    logo: INEELLogo,
    background: INEELImg,
    backgroundPath: "../../../assets/Institutions Images/INEEL mexico.jpg",
    website: "https://www.gob.mx/ineel",
  },
  {
    countryName: "Mexico",
    name: "IBERO",
    contraction: "IBERO",
    logo: IBEROLogo,
    background: IBEROImg,
    backgroundPath:
      "../../../assets/Institutions Images/Edificio Rectoría IBERO.jpg",
    website: "https://ibero.mx/",
  },
  {
    countryName: "Canada",
    name: "Institut National de la Recherche Scientifique",
    contraction: "INRS",
    logo: INRSLogo,
    background: INRSImg,
    backgroundPath: "../../../assets/Institutions Images/INRS imagen.jpg",
    website: "http://www.inrs.ca",
  },
  {
    countryName: "Canada",
    name: "Université Laval",
    contraction: "laval",
    logo: lavalLogo,
    background: lavalImg,
    backgroundPath:
      "../../../assets/Institutions Images/Univ Laval Canada.jpeg",
    website: "https://www.ulaval.ca",
  },
  {
    countryName: "Canada",
    name: "Gouvernement du Canada: CanMet Energy",
    contraction: "Government of Canada: CanMet Energy",
    logo: CanMetLogo,
    background: CanMetImg,
    backgroundPath:
      "../../../assets/Institutions Images/Canada CanMet Energy.jpg",
    website:
      "https://www.nrcan.gc.ca/science-data/research-centres-labs/canmetenergy-research-centres/varennes-qc-research-centre/5761",
  },
  {
    countryName: "France",
    name: "Université de RENNES 1",
    contraction: "RENNES 1",
    logo: RENNES1Logo,
    background: RENNES1Img,
    backgroundPath: "../../../assets/Institutions Images/France Rennes.jpg",
    website: "https://www.univ-rennes1.fr/",
  },
  {
    countryName: "France",
    name: "Géosciences pour une Terre durable",
    contraction: "BRGM",
    logo: BRGMLogo,
    background: BRGMImg,
    backgroundPath: "../../../assets/Institutions Images/BRGM background.png",
    website: "https://www.brgm.fr/",
  },
  {
    countryName: "Italy",
    name: "Universitá Degli Studi di Padova",
    contraction: "UDSP",
    logo: UDSPLogo,
    background: UDSPImg,
    backgroundPath: "../../../assets/Institutions Images/Padova Italy.jpg",
    website: "https://www.unipd.it/",
  },
  {
    countryName: "Italy",
    name: "Instituto Nazionale di Geofisica e Vulcanologia",
    contraction: "INGV",
    logo: INGVLogo,
    background: INGVImg,
    backgroundPath:
      "../../../assets/Institutions Images/INGV italia Napoli.jpg",
    website: "http://www.ov.ingv.it/ov/",
  },
  {
    countryName: "Belgium",
    name: "University of Mons",
    contraction: "Mons",
    logo: MonsLogo,
    background: MonsImg,
    backgroundPath: "../../../assets/Institutions Images/UMons.jpg",
    website: "https://web.umons.ac.be/fr/",
  },
  {
    countryName: "Slovenia",
    name: "Geoloski Zavod Slovenije",
    contraction: "GeoZS",
    logo: GeoZSLogo,
    background: GeoZSImg,
    backgroundPath: "../../../assets/Logos/GeoZS.jpg",
    website:
      "https://www.geo-zs.si/index.php/en/geozs-en/role-and-purpose-of-the-geozs",
  },
  {
    countryName: "Iceland",
    name: "Iceland School of Energy",
    contraction: "HR",
    logo: HRLogo,
    background: HRImg,
    backgroundPath: "../../../assets/Institutions Images/Iceland ISE.jpeg",
    website: "https://en.ru.is/ise/",
  },
  {
    countryName: "Sweden",
    name: "Royal Institute of Technology",
    contraction: "KTH",
    logo: KTHLogo,
    background: KTHImg,
    backgroundPath:
      "../../../assets/Logos/GeoZS.jpg../../../assets/Institutions Images/KTH Suecia.png",
    website: "https://www.kth.se/en",
  },
  {
    countryName: "Spain",
    name: "Institut Cartográphic i Geológic de Catalunya",
    contraction: "ICGC",
    logo: ICGCLogo,
    background: ICGCImg,
    backgroundPath:
      "../../../assets/Institutions Images/ICCG Cataluña España.jpg",
    website: "https://www.icgc.cat/",
  },
  {
    countryName: "Japan",
    name: "Akita University",
    contraction: "Akita",
    logo: AkitaLogo,
    background: AkitaImg,
    backgroundPath: "../../../assets/Institutions Images/akita Japon.jpg",
    website: "https://www.akita-u.ac.jp/eng/",
  },
  {
    countryName: "China",
    name: "Institute of Rock and Soil Mechanics, Chinese Academy of Sciences",
    contraction: "IRSM",
    logo: IRSMLogo,
    background: IRSMImg,
    backgroundPath: "../../../assets/Institutions Images/new building-IRSM.jpg",
    website: "http://english.whrsm.cas.cn/",
  },
  {
    countryName: "Australia",
    name: "URGE ENERGY PTY LTD",
    contraction: "URGE",
    logo: URGELogo,
    background: URGEImg,
    backgroundPath: "../../../assets/Institutions Images/Urge Image.png",
    website: "https://www.urgeenergy.com.au/",
  },
  {
    countryName: "New Zealand",
    name: "The University of Auckland",
    contraction: "UA",
    logo: UALogo,
    background: UAImg,
    backgroundPath:
      "../../../assets/Institutions Images/University of Auckland Background.jpg",
    website:
      "https://www.auckland.ac.nz/en/science/about-the-faculty/school-of-environment.html",
  },
  {
    countryName: "Argelia",
    name: "École Nationale Polytechnique de Constantine",
    contraction: "ENPC",
    logo: ENPCLogo,
    background: ENPCImg,
    backgroundPath:
      "../../../assets/Institutions Images/Argelia Ecole National Polytecnique Constantine.jpg",
    website: "http://www.enp-constantine.dz/",
  },
  {
    countryName: "Argelia",
    name: "Centre de Développement des Energies Renouvelables",
    contraction: "CDER",
    logo: CDERLogo,
    background: CDERImg,
    backgroundPath: "../../../assets/Institutions Images/Algeria CDER.jpg",
    website: "https://www.cder.dz/",
  },
  {
    countryName: "Spain",
    name: "Universidad Politécnica de Cartagena",
    contraction: "UPTC",
    logo: UPTCLogo,
    background: UPTCImg,
    backgroundPath: "../../../assets/Institutions Images/fondo UPTC España.jpg",
    website: "https://www.upct.es/",
  },
  {
    countryName: "Spain",
    name: "EOS Geoscience Consulting",
    contraction: "EOS",
    logo: EOSLogo,
    background: EOSImg,
    backgroundPath: "../../../assets/Institutions Images/fondo empresa EOS.png",
    website: "https://www.linkedin.com/company/eos-geoscience-consulting/",
  },
];
