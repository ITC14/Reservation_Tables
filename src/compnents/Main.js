import { useReducer,} from "react";
import BookingForm from "./BookingForm";
import { fetchAPI,submitAPI } from '../js/api';
import { useNavigate } from "react-router-dom";


// Définir les actions possibles pour le réducteur
const Actions = {
    Update_Times: "update_times",
    Initialize_Times: "initialize_times",
};

// Réducteur pour gérer les horaires disponibles
const timesReducer = (state, action) =>{
    switch(action.type){
        case Actions.Update_Times:
             // Logique pour mettre à jour les horaires disponibles
            return [...action.payload];
        case Actions.Initialize_Times:
            // Logique pour initialiser les horaires disponibles
            return [...action.payload];
        default:
            return state;
    }
};
// Fonction pour initialiser les horaires disponibles
const initializeTimes = () => {
  const today =  new Date();
  return fetchAPI(today);// Appel à l'API pour obtenir les horaires disponibles pour aujourd'hui
};

// Fonction pour mettre à jour les horaires disponibles
const updateTimes = (dispatch, selectedDate) => {
  // Ici, vous pouvez ajouter de la logique pour filtrer les horaires selon la date
  const dateObject = new Date(selectedDate);  // Convertir la chaîne en objet Date
  const times = fetchAPI(dateObject);// Appel à l'API pour obtenir les horaires pour la date sélectionnée
  dispatch({ type: Actions.Update_Times ,payload: times});
};
function Main(){

    const [availableTimes,dispatch] = useReducer(timesReducer,[],()=> initializeTimes());
    const navigate = useNavigate();
    // Gestionnaire pour la modification de la date
  const handleDateChange = (date) => {
    // Appeler la fonction pour mettre à jour les horaires disponibles
    updateTimes(dispatch, date);
  };
  const submitForm = (formData) => {
    const success = submitAPI(formData); // Soumettre les données du formulaire via l'API

    if (success) {
        navigate('/confirmed'); // Redirige vers la page de confirmation en cas de succès
    } else {
        console.log("Failed to submit the booking.");
    }
};
    
    return(
        <>
            <BookingForm availableTimes={availableTimes} onDateChange={handleDateChange} onSubmit={submitForm}/>
        </>
    )
}
export default Main;