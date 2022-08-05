import StyledHeader from "./StyledHeader";
import StyledButton from "./StyledButton";
import Link from "next/link";

export default function Header() {
  return (
    <StyledHeader>
      <Link href="/createCard">
        <StyledButton>Add new Card</StyledButton>
      </Link>
    </StyledHeader>
  );
}
