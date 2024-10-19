import SearchForm from "./SearchForm";
import CreatForm from "./CreateForm";
import UpdateForm from "./UpdateForm";
import RemoveForm from "./RemoveForm";
import DetailForm from "./DetailForm";
import List from "./List";

const Index = (props) => {
  return (
    <div className="bg">
      <div className="searchBg">
        <SearchForm />
      </div>
      <div className="listBg">
        <List />
      </div>
      <CreatForm />
      <UpdateForm />
      <RemoveForm />
      <DetailForm />
    </div>
  );
};

export default Index;
