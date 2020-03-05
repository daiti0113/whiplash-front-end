import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
  },
}));

export default function CheckboxesGroup(props) {
  const classes = useStyles();
  const choices = props.list;
  const initialState = Object.assign(...(choices.map(key => ({[key]: false}))))
  const [state, setState] = React.useState(initialState);

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          {Object.entries(state).map(([key, value]) => (
            <FormControlLabel key={key}
                control={<Checkbox checked={value} onChange={handleChange(key)} value={key}/>}
                label={key}
            />
          ))}
        </FormGroup>
      </FormControl>
    </div>
  );
}