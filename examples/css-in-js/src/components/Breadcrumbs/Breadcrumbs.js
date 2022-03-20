import styled from "styled-components";

function Crumb({ href, children }) {
  return (
    <CrumbWrapper>
      <CrumbLink href={href}>{children}</CrumbLink>
    </CrumbWrapper>
  );
}

function Breadcrumbs({ children }) {
  return (
    <nav aria-label="Breadcrumb">
      <BreadcrumbList>{children}</BreadcrumbList>
    </nav>
  );
}

const BreadcrumbList = styled.ol`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const CrumbWrapper = styled.li`
  display: inline;
  --spacing: 8px;

  &:not(:first-of-type) {
    margin-left: var(--spacing);

    &::before {
      content: "/";
      margin-right: var(--spacing);
      opacity: 0.25;
    }
  }
`;

const CrumbLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: revert;
  }
`;

const BreadcrumbsBlue = styled(BreadcrumbList)`
  color: blue;
`;

const TextItalicLink = styled.a`
  color: greenyellow;
  font-style: italic;

  ${BreadcrumbsBlue} & {
    color: blue;
    font-style: revert;
  }
`;

export { Crumb, BreadcrumbsBlue, TextItalicLink };

export default Breadcrumbs;
