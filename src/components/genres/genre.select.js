import React from "react"

const GenreSelect = ({ handler, defaultValue }) => (
  <div className="select">
    <label htmlFor="genres">Select a genre of anime:</label>
    <select
      id="genres"
      name="genres"
      defaultValue={defaultValue}
      onChange={handler}
    >
      <option value="1">Action</option>
      <option value="2">Adventure</option>
      <option value="3">Cars</option>
      <option value="4">Comedy</option>
      <option value="5">Dementia</option>
      <option value="6">Demons</option>
      <option value="7">Mystery</option>
      <option value="8">Drama</option>
      <option value="9">Ecchi</option>
      <option value="10">Fantasy</option>
      <option value="11">Game</option>
      <option value="12">Hentai</option>
      <option value="13">Historical</option>
      <option value="14">Horror</option>
      <option value="15">Kids</option>
      <option value="16">Magic</option>
      <option value="17">Martial Arts</option>
      <option value="18">Mecha</option>
      <option value="19">Music</option>
      <option value="20">Parody</option>
      <option value="21">Samurai</option>
      <option value="22">Romance</option>
      <option value="23">School</option>
      <option value="24">Sci-Fi</option>
      <option value="25">Shoujo</option>
      <option value="26">Shoujo-Ai</option>
      <option value="27">Shounen</option>
      <option value="28">Shounen-Ai</option>
      <option value="29">Space</option>
      <option value="30">Sports</option>
      <option value="31">Super Power</option>
      <option value="32">Vampire</option>
      <option value="33">Yaoi</option>
      <option value="34">Yuri</option>
      <option value="35">Harem</option>
      <option value="36">Slice Of Life</option>
      <option value="37">Supernatural</option>
      <option value="38">Military</option>
      <option value="39">Police</option>
      <option value="40">Psychological</option>
      <option value="41">Thriller</option>
      <option value="42">Seinen</option>
      <option value="43">Josei</option>
    </select>
  </div>
)

export default GenreSelect
