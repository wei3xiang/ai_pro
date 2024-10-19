import SearchForm from "./SearchForm";
import CreatForm from "./CreateForm";
import UpdateForm from "./UpdateForm";
import RemoveForm from "./RemoveForm";
import DisableForm from "./DisableForm";
import List from "./List";
import "./index.css";

const Index = (props) => {
  return (
    <div>
      <div>
        <div className="searchBg">
          <SearchForm />
        </div>
        <div className="listBg">
          <List />
        </div>
      </div>
      <CreatForm />
      <UpdateForm />
      <RemoveForm />
      <DisableForm />
    </div>
  );
};

export default Index;
