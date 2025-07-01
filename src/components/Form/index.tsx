import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { searchBarSchema } from "../PostList/validation";

interface SearchFormProps {
  updateList: (query: string) => void;
}

type searchFormData = z.infer<typeof searchBarSchema>;

const SearchForm: React.FC<SearchFormProps> = ({ updateList }) => {
  const { register, handleSubmit, reset } = useForm<searchFormData>({
    resolver: zodResolver(searchBarSchema),
  });

  const onSubmit = (data: searchFormData) => {
    updateList(data.query);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("query")} />
      <button>
        <MagnifyingGlassIcon />
      </button>
    </form>
  );
};

export default SearchForm;
