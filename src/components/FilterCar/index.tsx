import { Container, MapContainer, SearchButton, CalendarContainer } from "./styles";
import Image from "next/image";

import searchIcon from "../../../public/images/bx_bx-search.png";
import calendarIcon from "../../../public/images/ion_calendar-sharp@2x.png";
import mapPinIcon from "../../../public/images/ph_map-pin-fill@2x.png";

export function FilterCar() {
  return (
    <Container>
      <MapContainer>
        <Image src={mapPinIcon} alt="" width={14} height={14} />
        <p>North Carolina, NC 90025</p>
      </MapContainer>
      <CalendarContainer>
        <div>
          <Image src={calendarIcon} alt="" width={2} height={18} />
          <p>11/03/2021</p>
        </div>
        <div>
          <Image src={calendarIcon} alt="" width={2} height={18} />
          <p>12/12/2021</p>
        </div>
      </CalendarContainer>

      <SearchButton>
        <Image src={searchIcon} alt="" width={16} height={16} />
      </SearchButton>
    </Container>
  );
}
