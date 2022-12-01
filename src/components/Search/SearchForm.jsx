import { Form, SearchInput, SearchBtn } from './SearchForm.styled';

export const SearchForm = ({ onFormSubmit }) => {
  return (
    <Form onSubmit={onFormSubmit}>
      <SearchInput />
      <SearchBtn type="submit">Search</SearchBtn>
    </Form>
  );
};
