import Html exposing (Html, Attribute, div, input, text, button)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput, onClick)

main =
  Html.beginnerProgram { model = model, view = view, update = update }

-- MODEL
type alias Model =
  { content : String
  }

model : Model
model =
  { content = "" }

-- UPDATE

type Msg
  = Change String | Reset

update : Msg -> Model -> Model
update msg model =
  case msg of
    Change newContent ->
      { model | content = newContent }
    Reset ->
      { model | content = "" }

-- VIEW
view : Model -> Html Msg
view model =
  div []
    [ button [ onClick Reset ] [ text "Reset" ]
    , input [ placeholder "Text to reverse", onInput Change, value model.content ] []
    , div [] [ text (String.reverse model.content) ]
    ]
