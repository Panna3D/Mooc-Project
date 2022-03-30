//------FOR EXAMPLE PASSING DATA FROM CHILD -> PARENT
// (Link: https://stackoverflow.com/questions/38394015/how-to-pass-data-from-child-component-to-its-parent-in-reactjs)


// Parent
//--------
class ParentComponent extends React.Component {

    state = { language: '' }

    handleLanguage = (langValue) => {
        this.setState({language: langValue});
    }

    render() {
         return (
                <div className="col-sm-9">
                    <SelectLanguage onSelectLanguage={this.handleLanguage} /> 
                </div>
        )
     }
}


// Child
//--------
var json = require("json!../languages.json");
var jsonArray = json.languages;

// export class SelectLanguage extends React.Component {
export class SearchBox extends React.Component {
    state = {
            selectedCode: '',
            selectedLanguage: jsonArray[0],
        }

    handleLangChange = () => {
        var lang = this.dropdown.value;
        this.props.onSelectLanguage(lang);            
    }

    render() {
        return (
            <div>
                <DropdownList ref={(ref) => this.dropdown = ref}
                    data={jsonArray} 
                    valueField='lang' textField='lang'
                    caseSensitive={false} 
                    minLength={3}
                    filter='contains'
                    onChange={this.handleLangChange} />
            </div>            
        );
    }
}