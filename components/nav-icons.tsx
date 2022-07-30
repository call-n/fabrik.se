import { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

export function EventIcon(props: IconProps) {
  return (
    <svg width="20" height="20" fill="#ffdfc5" viewBox="0 0 20 20" {...props}>
      <path d="M12 15q-.833 0-1.417-.583Q10 13.833 10 13q0-.833.583-1.417Q11.167 11 12 11q.833 0 1.417.583Q14 12.167 14 13q0 .833-.583 1.417Q12.833 15 12 15Zm-7.5 3q-.625 0-1.062-.448Q3 17.104 3 16.5v-11q0-.604.438-1.052Q3.875 4 4.5 4H6V2h1.5v2h5V2H14v2h1.5q.625 0 1.062.448Q17 4.896 17 5.5v11q0 .604-.438 1.052Q16.125 18 15.5 18Zm0-1.5h11V9h-11v7.5Zm0-9h11v-2h-11Zm0 0v-2 2Z"/>
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg width="20" height="20" fill="#ffdfc5" viewBox="0 0 20 20" {...props}>
      <path d="m3.688 17.5-1.23-1.229 8.5-8.5q-.354-.875-.093-1.969.26-1.094 1.197-1.969 1.126-1.125 2.48-1.302 1.354-.177 2.208.677.854.854.677 2.209-.177 1.354-1.302 2.479-.875.937-1.979 1.198-1.104.26-1.979-.094l-.959 1 6.271 6.271L16.25 17.5l-6.271-6.271Zm2.437-7.083L3.604 7.896Q2.479 6.75 2.469 5.188 2.458 3.625 3.625 2.5l5.208 5.208Z"/>
    </svg>
  );
}

export function BookingIcon(props: IconProps) {
  return (
    <svg width="20" height="20" fill="#ffdfc5" viewBox="0 0 20 20" {...props}>
      <path d="M5.5 18q-.625 0-1.062-.438Q4 17.125 4 16.5v-13q0-.625.438-1.062Q4.875 2 5.5 2h9q.625 0 1.062.438Q16 2.875 16 3.5v13q0 .625-.438 1.062Q15.125 18 14.5 18Zm0-1.5h9v-13H13V10l-2-1-2 1V3.5H5.5v13Zm0 0v-13 13ZM9 10l2-1 2 1-2-1-2 1Z"/>
    </svg>
  );
}

export function GiftCardIcon(props: IconProps) {
  return (
    <svg width="20" height="20" fill="#ffdfc5" viewBox="0 0 20 20" {...props}>
      <path d="M3.417 14.146v1.604h13.166v-1.604Zm0-9.146h1.604q-.083-.188-.115-.365-.031-.177-.031-.406 0-1.062.76-1.812.761-.75 1.823-.75.646 0 1.177.343.532.344.948.823l.417.5.417-.5q.416-.479.958-.823.542-.343 1.187-.343 1.063 0 1.813.75t.75 1.812q0 .229-.021.406-.021.177-.104.365h1.583q.729 0 1.24.51.51.511.51 1.24v9q0 .729-.51 1.24-.511.51-1.24.51H3.417q-.729 0-1.24-.51-.51-.511-.51-1.24v-9q0-.729.51-1.24Q2.688 5 3.417 5Zm0 6.625h13.166V6.75h-4l1.667 2.292-1.417 1.041L10 6.25l-2.833 3.833L5.75 9.042 7.417 6.75h-4Zm4.021-6.583q.354 0 .583-.229.229-.23.229-.584t-.229-.583q-.229-.229-.583-.229-.355 0-.584.229-.229.229-.229.583t.229.584q.229.229.584.229Zm5.104 0q.354 0 .583-.229.229-.23.229-.584t-.229-.583q-.229-.229-.583-.229t-.584.229q-.229.229-.229.583t.229.584q.23.229.584.229Z"/>
    </svg>
  );
}

export function DrinksIcon(props: IconProps) {
  return (
    <svg width="20" height="20" fill="#ffdfc5" viewBox="0 0 20 20" {...props}>
      <path d="M2.5 18.333v-1.75h1.667V14q-.729-.271-1.198-.917-.469-.645-.469-1.479V4.896h5.083v6.708q0 .834-.468 1.479-.469.646-1.198.917v2.583h1.666v1.75Zm1.75-9.25h1.583V6.646H4.25Zm.792 3.313q.333 0 .562-.229.229-.229.229-.563v-.771H4.25v.771q0 .334.229.563.229.229.563.229Zm5.791 5.937q-.729 0-1.239-.51-.511-.511-.511-1.24V8.729q0-.541.334-1 .333-.458.854-.646l.771-.271q.229-.083.364-.26.136-.177.136-.406V2.521q0-.354.25-.604t.625-.25H15q.354 0 .604.25t.25.604v3.625q0 .229.136.406.135.177.364.26l.771.271q.521.188.865.646.343.459.343 1v7.854q0 .729-.51 1.24-.511.51-1.24.51Zm2.459-14.104h.812v-.812h-.812Zm-2.459 5.709h5.75V8.729l-.771-.271q-.791-.27-1.25-.896-.458-.624-.458-1.395v-.188h-.812v.188q0 .771-.448 1.395-.448.626-1.219.896l-.792.271Zm0 6.645h5.75v-1.562h-5.75Zm0-3.312h5.75v-1.583h-5.75Zm-5.791-.875Zm5.791.875v-1.583 1.583Z"/>
    </svg>
  );
}

export function HamburgerMenuIcon(props: IconProps) {
  return (
    <svg height="24" width="24" viewBox="0 0 24 24" {...props}>
      <g
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeWidth="2"
      >
        <line fill="none" x1="1" x2="23" y1="12" y2="12" />
        <line fill="none" x1="1" x2="23" y1="5" y2="5" />
        <line fill="none" x1="1" x2="23" y1="19" y2="19" />
      </g>
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg height="24" width="24" viewBox="0 0 24 24" {...props}>
      <g
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeWidth="2"
      >
        <line fill="none" stroke="currentColor" x1="19" x2="5" y1="5" y2="19" />
        <line fill="none" stroke="currentColor" x1="19" x2="5" y1="19" y2="5" />
      </g>
    </svg>
  );
}
