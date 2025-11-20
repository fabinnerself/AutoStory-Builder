import imgInnerScreen from "figma:asset/2b19803f6c5e3c26b39f607fe129d1919300df81.png";
import imgImage3 from "figma:asset/4e5e457399bf2f9a75054e6c8179bcdad5dcc13d.png";
import imgImage4 from "figma:asset/149275c3852cbe1804694a06eba271eb92adbab6.png";
import img41 from "figma:asset/ce8acc1589acfb83931d44ceb58e785947e7548d.png";
import imgLogo1 from "figma:asset/66aa22cf11db1271204d7fb2f00a05d9816b7e7a.png";
import imgImage5 from "figma:asset/4d6ed0c61fc7c3f8921b1036afb9c1dd8df3e227.png";
import imgBtnTerciary from "figma:asset/790b2daefb33308c894a1f4f4f275a0aca61ccdc.png";
import imgBtnTerciary1 from "figma:asset/1db5342d61a843b37cb79ee60c9195ed7ce74e59.png";
import imgBtnTerciary2 from "figma:asset/b6c7ea212af1aeeeae59a3b68d5b86f2725ca577.png";
import imgBtnTerciary3 from "figma:asset/7e9d540a6809ba8956509d866eabe6e24608ecdc.png";

function InnerScreen() {
  return (
    <div className="absolute h-[607.439px] left-1/2 rounded-[16px] top-[18.5px] translate-x-[-50%] w-[869.742px]" data-name="Inner screen">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="Data points on top of landscape" className="absolute left-0 max-w-none size-full top-0" src={imgInnerScreen} />
      </div>
    </div>
  );
}

function Ipad() {
  return (
    <div aria-label="Visual chart illustrating a 78% increase in efficiency across 33 regions between 2021 and 2024, with clear upward trends year over year" className="absolute bg-black h-[644px] left-[calc(50%+1px)] rounded-[24px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[907px]" data-name="Ipad">
      <div className="h-[644px] overflow-clip relative rounded-[inherit] w-[907px]">
        <InnerScreen />
      </div>
      <div aria-hidden="true" className="absolute border-[2px_2px_0px] border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_-4px_20px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function HeroImage() {
  return (
    <div className="absolute bg-[#041f59] h-[375px] left-[995px] rounded-[30px] top-[314px] w-[475px]" data-name="Hero image">
      <Ipad />
    </div>
  );
}

function HorizontalFullWidth() {
  return (
    <div className="h-[44px] relative w-[320px]" data-name="Horizontal/Full-width">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 44">
        <g id="Horizontal/Full-width">
          <line id="Divider" stroke="var(--stroke-0, #041F59)" x1="4.37114e-08" x2="320" y1="22" y2="22" />
        </g>
      </svg>
    </div>
  );
}

function HorizontalFullWidth1() {
  return (
    <div className="h-[35px] relative w-[320px]" data-name="Horizontal/Full-width">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 35">
        <g id="Horizontal/Full-width">
          <line id="Divider" stroke="var(--stroke-0, #041F59)" x1="4.37114e-08" x2="320" y1="17.5" y2="17.5" />
        </g>
      </svg>
    </div>
  );
}

function BtnPrimary() {
  return (
    <div className="absolute h-[55px] left-[509px] top-[3405px] w-[314px]" data-name="btn_primary">
      <div className="absolute bg-[#041f59] h-[55px] left-0 rounded-[15px] top-0 w-[306px]" />
      <p className="absolute font-['Julius_Sans_One:Regular',sans-serif] h-[27px] leading-[normal] left-[158px] not-italic text-[24px] text-center text-white top-[18px] translate-x-[-50%] w-[312px]">GENERAR MI HISTORIA</p>
    </div>
  );
}

function HorizontalFullWidth2() {
  return (
    <div className="h-[34px] relative w-[320px]" data-name="Horizontal/Full-width">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 34">
        <g id="Horizontal/Full-width">
          <line id="Divider" stroke="var(--stroke-0, #041F59)" x1="4.37114e-08" x2="320" y1="17" y2="17" />
        </g>
      </svg>
    </div>
  );
}

function HorizontalFullWidth3() {
  return (
    <div className="h-[35px] relative w-[320px]" data-name="Horizontal/Full-width">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 35">
        <g id="Horizontal/Full-width">
          <line id="Divider" stroke="var(--stroke-0, #CAC4D0)" x1="4.37114e-08" x2="320" y1="17.5" y2="17.5" />
        </g>
      </svg>
    </div>
  );
}

export default function LandingLight() {
  return (
    <div className="bg-slate-200 relative size-full" data-name="Landing light">
      <div className="absolute bg-[rgba(217,217,217,0.25)] h-[723px] left-0 top-[939px] w-[1398px]" />
      <div className="absolute bg-[rgba(217,217,217,0.25)] h-[411px] left-0 top-[3506px] w-[1398px]" />
      <div className="absolute bg-[#041f59] h-[411px] left-0 top-[3914px] w-[1398px]" />
      <div className="absolute bg-[#041f59] h-[150px] left-0 top-0 w-[1440px]" />
      <p className="absolute font-['Julius_Sans_One:Regular',sans-serif] h-[27px] leading-[normal] left-[747.5px] not-italic text-[24px] text-center text-white top-[61px] translate-x-[-50%] w-[159px]">Inicio</p>
      <p className="absolute font-['Julius_Sans_One:Regular',sans-serif] h-[226px] leading-[normal] left-[25px] not-italic text-[64px] text-slate-800 top-[236px] w-[600px]">Crea contenido de valor en tres pasos</p>
      <p className="absolute font-['Julius_Sans_One:Regular',sans-serif] h-[42px] leading-[normal] left-[493px] not-italic text-[40px] text-slate-800 top-[1006px] w-[447px]">¿CÓMO FUNCIONA?</p>
      <p className="absolute font-['Julius_Sans_One:Regular',sans-serif] h-[42px] leading-[normal] left-[68px] not-italic text-[40px] text-slate-800 top-[1679px] w-[447px]">EJEMPLOS DE USO</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[95px] leading-[normal] left-[25px] not-italic text-[24px] text-slate-800 top-[493px] w-[600px]">Simplifica la producción de contenido. Subí imágenes, textos, testimonios para crear contenido para redes</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[28px] leading-[normal] left-[1160px] not-italic text-[28px] text-slate-800 top-[1090px] w-[600px]">SUBE</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[28px] leading-[normal] left-[1122px] not-italic text-[28px] text-slate-800 top-[1291px] w-[600px]">GENERA</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[28px] leading-[normal] left-[1108px] not-italic text-[28px] text-slate-800 top-[1486px] w-[600px]">EXPORTA</p>
      <p className="absolute font-['Julius_Sans_One:Regular',sans-serif] h-[27px] leading-[normal] left-[938.5px] not-italic text-[24px] text-center text-white top-[61px] translate-x-[-50%] w-[235px]">Cómo Funciona</p>
      <div className="absolute bg-[#d9d9d9] h-[49px] left-[1097px] rounded-[15px] top-[50px] w-[240px]" data-name="btn_secondary" />
      <div className="absolute bg-[#041f59] h-[49px] left-[25px] rounded-[15px] top-[640px] w-[240px]" data-name="btn_primary" />
      <div className="absolute bg-[#d9d9d9] h-[49px] left-[325px] rounded-[15px] top-[640px] w-[277px]" data-name="btn_secondary" />
      <p className="absolute font-['Julius_Sans_One:Regular',sans-serif] h-[27px] leading-[normal] left-[1217.5px] not-italic text-[24px] text-center text-orange-500 top-[61px] translate-x-[-50%] w-[235px]">Ingresar</p>
      <p className="absolute font-['Julius_Sans_One:Regular',sans-serif] h-[28px] leading-[normal] left-[144.5px] not-italic text-[24px] text-center text-white top-[650px] translate-x-[-50%] w-[235px]">Registrarme</p>
      <p className="absolute font-['Julius_Sans_One:Regular',sans-serif] h-[21px] leading-[normal] left-[463.5px] not-italic text-[24px] text-center text-orange-500 top-[650px] translate-x-[-50%] w-[261px]">AGENDAR REUNIÓN</p>
      <HeroImage />
      <div className="absolute flex h-[44px] items-center justify-center left-0 top-[895px] w-[320px]">
        <div className="flex-none scale-y-[-100%]">
          {[...Array(2).keys()].map((_, i) => (
            <HorizontalFullWidth key={i} />
          ))}
        </div>
      </div>
      <div className="absolute flex h-[44px] items-center justify-center left-[2px] top-[3445px] w-[320px]">
        <div className="flex-none scale-y-[-100%]" />
      </div>
      <div className="absolute flex h-[35px] items-center justify-center left-[1084px] top-[1614px] w-[320px]">
        <div className="flex-none scale-y-[-100%]">
          <HorizontalFullWidth1 />
        </div>
      </div>
      <div className="absolute h-[68px] left-[1266px] top-[1251px] w-[84px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
      <div className="absolute h-[69px] left-[1266px] top-[1450px] w-[82px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <div className="absolute h-[800px] left-[98px] top-[2523px] w-[1200px]" data-name="4 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img41} />
      </div>
      <div className="absolute bg-emerald-500 h-[306px] left-[174px] top-[1799px] w-[448px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[31px] leading-[normal] left-[688px] not-italic text-[24px] text-slate-800 top-[1169px] w-[788px]">Arrastra imágenes, videos o textos (testimonios, capturas)</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[31px] leading-[normal] left-[775px] not-italic text-[24px] text-slate-800 top-[1364px] w-[788px]">La IA analiza el contenido y crea una historia visual</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[31px] leading-[normal] left-[775px] not-italic text-[24px] text-slate-800 top-[1565px] w-[788px]">Descarga como imagen, PDF o comparte en redes</p>
      <p className="[text-shadow:rgba(0,0,0,0.25)_0px_4px_4px] absolute font-['Julius_Sans_One:Regular',sans-serif] h-[71px] leading-[normal] left-[187px] not-italic text-[40px] text-slate-200 top-[1819px] w-[416px]">🌱 Impacto Social</p>
      <p className="absolute font-['Julius_Sans_One:Regular',sans-serif] h-[43px] leading-[normal] left-[409px] not-italic text-[28px] text-center text-slate-200 top-[1928px] translate-x-[-50%] w-[344px]">Fundaciones: convierte testimonios en campañas emocionales</p>
      <div className="absolute bg-emerald-500 h-[307px] left-[721px] top-[1796px] w-[448px]" />
      <div className="absolute bg-emerald-500 h-[300px] left-[430px] top-[2147px] w-[448px]" />
      <p className="[text-shadow:rgba(0,0,0,0.25)_0px_4px_4px] absolute font-['Julius_Sans_One:Regular',sans-serif] h-[71px] leading-[normal] left-[734px] not-italic text-[40px] text-slate-200 top-[1816px] w-[416px]">🛍Marca Personal</p>
      <p className="[text-shadow:rgba(0,0,0,0.25)_0px_4px_4px] absolute font-['Julius_Sans_One:Regular',sans-serif] h-[71px] leading-[normal] left-[462px] not-italic text-[40px] text-slate-200 top-[2178px] w-[416px]">📚 Educación</p>
      <p className="absolute font-['Julius_Sans_One:Regular',sans-serif] h-[43px] leading-[normal] left-[956px] not-italic text-[28px] text-center text-slate-200 top-[1926px] translate-x-[-50%] w-[344px]">Creadores: automatiza stories diarios a partir de logros</p>
      <p className="absolute font-['Julius_Sans_One:Regular',sans-serif] h-[43px] leading-[normal] left-[644px] not-italic text-[28px] text-center text-slate-200 top-[2277px] translate-x-[-50%] w-[344px] whitespace-pre-wrap">{`Instituciones: genera casos de estudio  `}</p>
      <p className="absolute font-['Julius_Sans_One:Regular',sans-serif] h-[227px] leading-[normal] left-[calc(50%-198px)] not-italic text-[30px] text-center text-emerald-500 top-[3045px] translate-x-[-50%] w-[330px]">María camina 5 km diarios para llevar comida...Su fuerza no tiene edad.</p>
      <p className="absolute font-['Julius_Sans_One:Regular',sans-serif] h-[42px] leading-[normal] left-[30px] not-italic text-[40px] text-slate-800 top-[3587px] w-[447px]">LLAMADA A ACCION</p>
      <BtnPrimary />
      <div className="absolute bg-[#041f59] h-[55px] left-[808px] rounded-[15px] top-[3701px] w-[339px]" />
      <p className="absolute font-['Julius_Sans_One:Regular','Noto_Sans:Regular',sans-serif] h-[37px] leading-[normal] left-[978.5px] text-[24px] text-center text-white top-[3719px] translate-x-[-50%] w-[337px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        PROBAR AHORA GRATIS →
      </p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-[173px] leading-[normal] left-[38px] not-italic text-[0px] text-slate-800 top-[3678px] w-[686px]">
        <p className="mb-0 text-[36px]">Crea tu historia en 3 pasos</p>
        <p className="mb-0 text-[36px]">&nbsp;</p>
        <p className="text-[24px]">Sube tus materiales y deja que la IA haga el resto. Sin experiencia en diseño o redacción.</p>
      </div>
      <div className="absolute flex h-[34px] items-center justify-center left-[1075px] top-[3861px] w-[320px]">
        <div className="flex-none scale-y-[-100%]">
          <HorizontalFullWidth2 />
        </div>
      </div>
      <div className="absolute flex h-[35px] items-center justify-center left-[505px] top-[4196px] w-[320px]">
        <div className="flex-none scale-y-[-100%]">
          <HorizontalFullWidth3 />
        </div>
      </div>
      <div className="absolute h-[161px] left-0 top-[3927px] w-[395px]" data-name="logo 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogo1} />
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[31px] leading-[normal] left-[603px] not-italic text-[#d9d9d9] text-[24px] top-[3988px] w-[788px]">Inicio</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[31px] leading-[normal] left-[603px] not-italic text-[#d9d9d9] text-[24px] top-[4033px] w-[788px]">Como funciona</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[31px] leading-[normal] left-[603px] not-italic text-[#d9d9d9] text-[24px] top-[4084px] w-[788px]">Ejemplos</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[31px] leading-[normal] left-[603px] not-italic text-[#d9d9d9] text-[24px] top-[4127px] w-[788px]">Llamada a acción</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[31px] leading-[normal] left-[327px] not-italic text-[#d9d9d9] text-[24px] top-[4269px] w-[788px]">© 2025 AutoStory Builder. Todos los derechos reservados.</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[31px] leading-[normal] left-[590px] not-italic text-[#d9d9d9] text-[32px] top-[3947px] w-[788px]">Recursos</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[31px] leading-[normal] left-[41px] not-italic text-[#d9d9d9] text-[24px] top-[4100px] w-[788px]">La IA que convierte momentos en historia</p>
      <div className="absolute h-[61px] left-[1269px] top-[1072px] w-[81px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
      <div className="absolute h-[161px] left-0 top-0 w-[395px]" data-name="logo 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogo1} />
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[45px] leading-[normal] left-[875px] not-italic text-[#d9d9d9] text-[32px] top-[3938px] w-[479px]">Sigueme en mis redes sociales</p>
      <div className="absolute h-[120px] left-[876px] top-[4007px] w-[133px]" data-name="btn_terciary">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBtnTerciary} />
      </div>
      <div className="absolute h-[175px] left-[968px] top-[3987px] w-[163px]" data-name="btn_terciary">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBtnTerciary1} />
      </div>
      <div className="absolute h-[111px] left-[1114px] top-[4008px] w-[113px]" data-name="btn_terciary">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBtnTerciary2} />
      </div>
      <div className="absolute h-[117px] left-[1229px] top-[4008px] w-[113px]" data-name="btn_terciary">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBtnTerciary3} />
      </div>
    </div>
  );
}