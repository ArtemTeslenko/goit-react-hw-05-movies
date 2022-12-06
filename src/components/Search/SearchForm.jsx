import { Form, SearchInput, SearchBtn } from './SearchForm.styled';

export const SearchForm = ({ onFormSubmit }) => {
  return (
    <Form onSubmit={onFormSubmit}>
      <SearchInput type="text" name="query" />
      <SearchBtn type="submit">Search</SearchBtn>
    </Form>
  );
};
