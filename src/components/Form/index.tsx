import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlassIcon, SpinnerGapIcon } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import styled, { css } from "styled-components";
import type { z } from "zod";
import { searchBarSchema } from "../PostList/validation";

interface SearchFormProps {
  updateList: (query: string) => void;
}

type searchFormData = z.infer<typeof searchBarSchema>;

const SearchForm: React.FC<SearchFormProps> = ({ updateList }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<searchFormData>({
    resolver: zodResolver(searchBarSchema),
  });

  const onSubmit = (data: searchFormData) => {
    updateList(data.query);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        {...register("query")}
        placeholder="Search for a post"
        aria-label="Search for a post"
      />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <SpinnerGapIcon size={20} className="loading" />
        ) : (
          <MagnifyingGlassIcon size={20} />
        )}
      </button>
    </StyledForm>
  );
};

export default SearchForm;

const StyledForm = styled.form`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    gap: 1rem;
    input {
      height: 2rem;
      background-color: ${theme.base.input};
      border: 2px solid ${theme.base.profile};
      border-radius: 4px;
      flex: 1;
      color: ${theme.base.text};
      padding: 0 1rem;
    }
    button {
      background-color: ${theme.blue};
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      border-radius: 4px;
      border: 2px solid ${theme.blue};
      color: ${theme.base.title};
      transition: 200ms;
      &:hover {
        background-color: ${theme.base.bg};
      }
    }
  `}
`;
