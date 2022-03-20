import styled from "styled-components";

const Quote = ({ by, source, children }) => {
  return (
    <figure>
      <QuoteContent>{children}</QuoteContent>

      <figcaption>
        <Author>
          <SourceLink href={source}>{by}</SourceLink>
        </Author>
      </figcaption>
    </figure>
  );
};

const QuoteContent = styled.blockquote`
  margin: 0;
  background: hsl(0deg 0% 90%);
  padding: 16px 20px;
  border-radius: 8px;
  font-style: italic;

  &:before {
    content: "“";
  }

  &:after {
    content: "”";
  }
`;

const TextLink = styled.a`
  color: red;
  text-decoration: none;

  ${QuoteContent} & {
    color: black;
    text-decoration: revert;
  }
`;

const Author = styled.cite`
  display: block;
  text-align: right;
  margin-top: 8px;
`;

const SourceLink = styled.a`
  text-decoration: none;
  color: hsl(0deg 0% 35%);

  &:before {
    content: "—";
  }
`;

export { TextLink };

export default Quote;
