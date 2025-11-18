// App.tsx
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const App: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const scaleValue = new Animated.Value(0);

  const openModal = () => {
    setModalVisible(true);
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 8,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.spring(scaleValue, {
      toValue: 0,
      friction: 8,
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Main Screen */}
      <View style={styles.centerContainer}>
        <TouchableOpacity
          style={styles.openButton}
          onPress={openModal}
          testID="open-modal-button"
        >
          <Text style={styles.openButtonText}>Open Welcome Modal ++++</Text>
        </TouchableOpacity>
      </View>

      <Modal
        transparent
        visible={modalVisible}
        animationType="none"
        onRequestClose={closeModal}
        testID="welcome-modal"
      >
        <View style={styles.modalOverlay} testID="modal-overlay">
          <Animated.View
            style={[
              styles.modalContent,
              { transform: [{ scale: scaleValue }] },
            ]}
            testID="modal-content"
          >
            <Text style={styles.welcomeTitle}>Welcome!</Text>
            <Text style={styles.welcomeSubtitle}>
              We are thrilled to have you here!
            </Text>
            <Text style={styles.welcomeMessage}>
              Explore amazing features{'\n'}and enjoy a seamless experience.
            </Text>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={closeModal}
              testID="get-started-button"
            >
              <Text style={styles.closeButtonText}>Get Started</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  openButton: {
    backgroundColor: '#4f46e5',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  openButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: width * 0.85,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
    textAlign: 'center',
  },
  welcomeSubtitle: {
    fontSize: 18,
    color: '#475569',
    marginBottom: 16,
    textAlign: 'center',
  },
  welcomeMessage: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
  },
  closeButton: {
    backgroundColor: '#10b981',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 12,
    minWidth: 160,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default App;
