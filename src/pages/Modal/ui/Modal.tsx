import React from 'react';
import styles from "./Modal.module.scss";
import {ModalPopup} from "../../../components/ModalPopup";
import {PlacementOfImages} from "../../../components/PlacementOfImages";

export type Images = {
  id: string,
  author: string,
  width: number,
  height: number,
  url: string,
  download_url: string
}
export const Modal = () => {

  const url: string = "https://picsum.photos/v2/list/"
  const [images, setImages] = React.useState<Images[]>([])
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null)
  const [selectedElement, setSelectedElement] = React.useState<Images | null>(null)

  const fetchGetData = async (getUrl: string) => {
    try {
      setIsLoading(true)
      await fetch(`${getUrl}?page=83&limit=10`)
        .then(response => response.json())
        .then(data => setImages(data))
      setIsLoading(false)
    } catch (error: any) {
      setErrorMessage(error)
      setIsLoading(false)
    }
  }

  React.useEffect(() => {
    fetchGetData(url)
  }, [])

  if (errorMessage) {
    return <h1>Error: {errorMessage}</h1>
  }
  return (
    <div className={styles.canvas}>
      {isLoading ? (<h1 className={"text-[--rbc]"}>Lodaing...</h1>) : (
        <PlacementOfImages images={images} setSelectedElement={setSelectedElement}/>)}
      <ModalPopup selectedElement={selectedElement} setSelectedElement={setSelectedElement}/>
    </div>
  );
};

