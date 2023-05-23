import { View, Text, TextInput, Image, Button } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Divider } from '@rneui/base'

const PLACEHOLDER_IMG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAS1BMVEX///+hoaGdnZ3ExMTx8fGlpaXNzc2enp7i4uL4+PjIyMj19fWampr5+fn8/PzT09Pr6+u9vb2zs7OsrKzc3NzW1tapqam4uLjh4eFxahFAAAADCUlEQVR4nO3bDW+qMBiG4VKpRSlFwM39/196QBER+ZiDxLw995UtSxw260MpbytTCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC51Uab+rw6R69zxfa2ihqvleztmkm+XSX3nZoOr9FAF0Qx0936W1p/Web7USRFpmBPmSH5utq+POtX2T+qGWOA+e3a25PBgFk4JX36wKRn8F6ojOoz398LMti5d1ddgYqd02No8tVhZ7oDNSXM9caR5drpgTRGaT3WtG4fEVzojPIXVftViuaE51B8Vgz6P/1Wrg8MnDZ35sTncFedxmYFc2JzuDkbNTeGOY7kaZq5loRnYHadQMhnTu+sK7IplMQnYH3F3fbTzrNneeiTkpX0weIzqB2Lo35Ps6OgtsdVO8mD5CegfKHdGaYq2bSaO8cP2riOOkZzJcFdQXtv+3SnCE9gwW+ngxMV0tOvCfwDOpV1WP3eOoGGngG8dMWuk5Gr52wM/DV86cQdrSiDjkDr3YuelaOzaIhZ6DOwwii0X2GkDOIhwk0U8Lp9biAMvBJv391aVCOfST5/VpRhZNBbJzr7a16ddQjEUS2CDeDzOjI6Oox8Scvk8HUlBBIBl5drmddF/eJPx1PoBkJwykhkAy67VV3bl+4jF4J1wyGNXMgGZy6Huv4+kI+GUF/sNyEkIFXWTU4y8nsUyr1YAktg/6e2m1l5M1sBrYdLK0gMniuB13S33QfD6FSvQ/nQsggHl77+4nbYm+w7FRIGfh6cWiee7j8yJrV58e8KD+Dp8ng98xjSpCfwc+fIohs2TUnPoPpenCB6/otPoPqz8+runvNLD2D8cXh75h2s114BvP14AJ7ud0bZGeQzteDS9pltOwMpheHv3PbWROdQb5YDy4xzTOuUjNonj86rY6g2VmTOw7qDA6Rc067FXT97lx0BvFPsgXB18KGzUnNwO63Uwr9fyajm2e1N1EvtQVmkJlten9nVz3u/CHJblv5hv8RIhYZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIH7B0uwLlAhgDlaAAAAAElFTkSuQmCC'

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required('A URL is requied'),
  caption: Yup.string().max(2200, 'Caption has reached the character limit.')
})

const FormikPostUploader = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)

  return (
    <Formik
      initialValues={{ caption: '', imageUrl: '' }}
      onSubmit={(values) => console.log(values)}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
        <>
          <View style={{ margin: 20, justifyContent: 'space-between', flexDirection: 'row'}}>
            <Image
              source={{ uri: thumbnailUrl ? thumbnailUrl : PLACEHOLDER_IMG }}
              style={{ width: 100, height: 100 }}
            />

            <View style={{ flex: 1, marginLeft: 12 }}>
            <TextInput
              style={{ color: 'black', fontSize: 20 }}
              placeholder='Write a caption...'
              multiline={true}
              onChangeText={handleChange('caption')}
              onBlur={handleBlur('caption')}
              value={values.caption}
              styl
            />
            </View>
          </View>
          <Divider width={0.2} orientation='vertical' />
          <TextInput
            onChange={e => setThumbnailUrl(e.nativeEvent.text)}
              style={{ color: 'black', fontSize: 20 }}
              placeholder='Enter Image Url'
              onChangeText={handleChange('imageUrl')}
              onBlur={handleBlur('imgeUrl')}
              value={values.imageUrl}
            />
            {errors.imageUrl && (
              <Text style={{ fontSize: 10, color: 'red' }}>
                {errors.imageUrl}
              </Text>
            )}

            <Button onPress={handleSubmit} title='Share' disabled={!isValid} />
        </>
      )}
    </Formik>
  )
}

export default FormikPostUploader